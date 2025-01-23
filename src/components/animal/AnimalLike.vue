<template>
    <Button class="!absolute top-1 right-1 z-10 w-max bg-black !size-8" raised severity="contrast" @click="onSetLike"
        :id="`like_${animalId}`" rounded v-if="isAuth()">
        <template #icon>
            <IconAction action="add" :icon="isLiked ? 'mdi-heart' : 'mdi:heart-outline'"
                :class="{ '!text-green-500': isLiked }" class="text-xl" />
        </template>

      
    </Button>
</template>
<script setup lang="ts">
import useAnimal from '@/services/animal.service';
import { isAuth } from '@/services/auth.middleware';
import SocketService from '@/services/socket.service';
import utils from '@/types/helpers/utils';
import { onMounted, ref, watch } from 'vue';


interface Props {
    likes: string[];
    animalId: string;
}

const props = defineProps<Props>();

const { setLike } = useAnimal();

const isLiked = ref(utils.isLiked(props.likes));


const onSetLike = async () => {
    isLiked.value = !isLiked.value;
    setLike(props.animalId, isLiked.value).catch(() => {
        isLiked.value = !isLiked.value;
    })
}

onMounted(() => {
    SocketService.getInstance().getFromChannel(`likes_${props.animalId}`, (likesFromSocket: string[]) => {
        isLiked.value = utils.isLiked(likesFromSocket);
    })
})

watch(isLiked, () => {
    const likeButton = document.getElementById(`like_${props.animalId}`) as HTMLButtonElement;
    if (likeButton) {
        likeButton.classList.add('bounce-once');
        setTimeout(() => {
            likeButton.classList.remove('bounce-once');
        }, 1000);
    }
})

</script>