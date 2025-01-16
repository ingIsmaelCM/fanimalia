<template>
  <el-popconfirm v-if="isConfirm" class="!text-base" @confirm="accept" @cancel="reject"
    :title="title || '¿Desa continuar con esta acción?'" :width="width || '300px'">
    <template #reference>
      <slot />
    </template>

    <template #actions="{ confirm, cancel }">
      <div class="flex justify-end space-x-4 items-center p-4">
        <Button severity="danger" @click="cancel" class="!w-max px-2 text-light text-base">{{ cancelText || 'Cancelar' }}
          <template #icon>
            <Icon icon="mdi:close" class="text-2xl" />
          </template>
        </Button>

        <Button severity="success" @click="confirm" class="!w-max px-2 text-light text-base">{{ confirmText || 'Aceptar' }}
          <template #icon>
            <Icon icon="mdi:check" class="text-2xl" />
          </template>
        </Button>
      </div>
    </template>
  </el-popconfirm>
  <template v-else>
    <slot />
  </template>
</template>

<style scoped>
.el-tooltip__trigger {
  color: unset !important;
}
</style>

<script setup lang="ts">

interface IProps {
  title?: string;
  confirmText?: string;
  cancelText?: string;
  accept?: Function;
  reject?: Function;
  isConfirm?: boolean;
  width?: string;
}

withDefaults(defineProps<IProps>(), {
  isConfirm: true
});
</script>
