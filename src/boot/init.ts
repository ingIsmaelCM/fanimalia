import { App } from "vue";

import HelperMaxlength from "@/components/common/HelperMaxlength.vue";
import CustomDialog from "@/components/common/CustomDialog.vue";
import CustomConfirm from "@/components/common/CustomConfirm.vue";
import IconAction from "@/components/common/IconAction.vue";
import EditorBox from "@/components/common/EditorBox.vue";
import ValidationMessage from "@/components/common/ValidationMessage.vue";
import InputEmail from "@/components/common/InputEmail.vue";
import SingleUpload from "@/components/common/SingleUpload.vue";
import NotAnimalFound from "@/components/animal/NotAnimalFound.vue";


export default function (app: App<Element>) {
  app
    .component("ValidationMessage", ValidationMessage)
    .component("CustomDialog", CustomDialog)
    .component("CustomConfirm", CustomConfirm)
    .component('HelperMaxlength', HelperMaxlength)
    .component('IconAction', IconAction)
    .component('EditorBox', EditorBox)
    .component("InputEmail", InputEmail)
    .component("SingleUpload", SingleUpload)
    .component("NotAnimalFound", NotAnimalFound)
  
}