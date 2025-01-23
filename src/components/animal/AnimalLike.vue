<template>
    <Button class="!absolute top-0 right-0 z-10 w-max bg-black" raised severity="contrast" @click="onSetLike"
        :id="`like_${animalId}`" >

        <div class="flex items-center space-x-2">
            <Chip :label="`Likes: ${utils.shortNumber(animalLikes.length)}`" class="!text-white !bg-transparent !text-sm !px-2 !py-1" />
            <IconAction action="add" :icon="isLiked ? 'mdi-heart' : 'mdi:heart-outline'"
                :class="{ '!text-green-500': isLiked }" class="text-xl" />
        </div>



    </Button>
</template>
<script setup lang="ts">
import useAnimal from '@/services/animal.service';
import SocketService from '@/services/socket.service';
import utils from '@/types/helpers/utils';
import { onMounted, ref, watch } from 'vue';


interface Props {
    likes: string[];
    animalId: string;
}

const props = defineProps<Props>();
const animalLikes = ref(props.likes);

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
        animalLikes.value = likesFromSocket;
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