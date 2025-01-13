import { App } from "vue";
import InputText from "primevue/inputtext";
import InputMask from "primevue/inputmask";
import FloatLabel from "primevue/floatlabel";
import InputNumber from "primevue/inputnumber";
import InputOtp from "primevue/inputotp";
import InputSwitch from "primevue/inputswitch";
import Calendar from "primevue/calendar";
import Password from "primevue/password";
import Button from "primevue/button";
import Dock from "primevue/dock";
import Avatar from "primevue/avatar";
import Menu from "primevue/menu";
import TabMenu from "primevue/tabmenu";
import Dropdown from "primevue/dropdown";
import Paginator from "primevue/paginator";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import SplitButton from "primevue/splitbutton";
import Sidebar from "primevue/sidebar";
import Dialog from "primevue/dialog";
import MultiSelect from "primevue/multiselect";
import ConfirmDialog from "primevue/confirmdialog";
import SelectButton from "primevue/selectbutton";
import Stepper from "primevue/stepper";
import ContextMenu from "primevue/contextmenu";
import Slider from "primevue/slider";
import TabView from "primevue/tabview";
import TabPanel from "primevue/tabpanel";
import Checkbox from "primevue/checkbox";
import RadioButton from "primevue/radiobutton";
import Galleria from "primevue/galleria";
import Carousel from "primevue/carousel";
import Image from "primevue/image";
import Card from "primevue/card";
import SpeedDial from "primevue/speeddial";
import Textarea from "primevue/textarea";
import MeterGroup from "primevue/metergroup";
import DynamicDialog from "primevue/dynamicdialog";
import Editor from "primevue/editor";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import ToastService from "primevue/toastservice";
import ConfirmationService from "primevue/confirmationservice";
import DialogService from "primevue/dialogservice";
import AutoComplete from "primevue/autocomplete";
import ToggleButton from "primevue/togglebutton";
import PickList from "primevue/picklist";
import Listbox from "primevue/listbox";
import Tooltip from "primevue/tooltip";
import Tag from "primevue/tag";
import Chip from "primevue/chip";
import Chips from "primevue/chips";
import OverlayPanel from "primevue/overlaypanel";
import Breadcrumb from "primevue/breadcrumb";
import TieredMenu from "primevue/tieredmenu";
import Badge from "primevue/badge";
import ProgressBar from "primevue/progressbar";
import Tree from "primevue/tree";
import OrganizationChart from "primevue/organizationchart";
import ConfirmPopup from "primevue/confirmpopup";
import Accordion from "primevue/accordion";
import AccordionTab from "primevue/accordiontab";
import FileUpload from "primevue/fileupload";
import Divider from "primevue/divider";
import Inplace from 'primevue/inplace';
import Timeline from 'primevue/timeline';
import VirtualScroller from "primevue/virtualscroller";
import Menubar from "primevue/menubar";


import Toast from "primevue/toast";

import ColumnGroup from "primevue/columngroup";
import Row from "primevue/row";
import DataView from "primevue/dataview";
import Skeleton from "primevue/skeleton";
import Fieldset from "primevue/fieldset";
import Ripple from "primevue/ripple";
import BadgeDirective from "primevue/badgedirective";

const primevue = (app: App<Element>) => {
  app
    .component("InputText", InputText)
    .component("InputMask", InputMask)
    .component("FloatLabel", FloatLabel)
    .component("InputNumber", InputNumber)
    .component("InputSwitch", InputSwitch)
    .component("Calendar", Calendar)
    .component("Password", Password)
    .component("Button", Button)
    .component("Dock", Dock)
    .component("Avatar", Avatar)
    .component("Menu", Menu)
    .component("TabMenu", TabMenu)
    .component("Dropdown", Dropdown)
    .component("Paginator", Paginator)
    .component("DataTable", DataTable)
    .component("DataView", DataView)
    .component("Column", Column)
    .component("SplitButton", SplitButton)
    .component("Sidebar", Sidebar)
    .component("Dialog", Dialog)
    .component("MultiSelect", MultiSelect)
    .component("ConfirmDialog", ConfirmDialog)
    .component("SelectButton", SelectButton)
    .component("InputOtp", InputOtp)
    .component("Stepper", Stepper)
    .component("ContextMenu", ContextMenu)
    .component("Slider", Slider)
    .component("TabPanel", TabPanel)
    .component("TabView", TabView)
    .component("Checkbox", Checkbox)
    .component("RadioButton", RadioButton)
    .component("Galleria", Galleria)
    .component("Carousel", Carousel)
    .component("Image", Image)
    .component("Card", Card)
    .component("SpeedDial", SpeedDial)
    .component("Textarea", Textarea)
    .component("MeterGroup", MeterGroup)
    .component("DynamicDialog", DynamicDialog)
    .component("AutoComplete", AutoComplete)
    .component("ToggleButton", ToggleButton)
    .component("Editor", Editor)
    .component("IconField", IconField)
    .component("InputIcon", InputIcon)
    .component("PickList", PickList)
    .component("Listbox", Listbox)
    .component("Tag", Tag)
    .component("Chip", Chip)
    .component("Chips", Chips)
    .component("ColumnGroup ", ColumnGroup)
    .component("Row", Row)
    .component("Skeleton", Skeleton)
    .component("Fieldset", Fieldset)
    .component("OverlayPanel", OverlayPanel)
    .component("Breadcrumb", Breadcrumb)
    .component("TieredMenu", TieredMenu)
    .component("Badge", Badge)
    .component("Toast", Toast)
    .component("ProgressBar", ProgressBar)
    .component("Tree", Tree)
    .component("OrganizationChart", OrganizationChart)
    .component("ConfirmPopup", ConfirmPopup)
    .component("Accordion", Accordion)
    .component("AccordionTab", AccordionTab)
    .component("FileUpload", FileUpload)
    .component("Divider", Divider)
    .component("Inplace", Inplace)
    .component("Timeline", Timeline)
    .component("VirtualScroller", VirtualScroller)
    .component("Menubar", Menubar)
    .use(ToastService)
    .use(DialogService)
    .use(ConfirmationService)
    .directive("tooltip", Tooltip)
    .directive("badge", BadgeDirective)
    .directive("ripple", Ripple);
};

export default primevue;