
import { INotification, IToast } from "@/types/types";
import { Validation } from "@vuelidate/core";
import dayjs from "dayjs";

import { ConfirmationOptions } from "primevue/confirmationoptions";
import { ToastServiceMethods } from "primevue/toastservice";
import { Ref } from "vue";
let timer: any;

export default {
  getErrorFromAxios: (error: any): INotification => {
    let message =
      error.response?.data.content ||
      error.response?.data ||
      "Error desconocido";
    if (typeof error.response?.data?.content == "object") {
      const content: any = error.response?.data.content;
      message = Object.values(content)
        .map((item: any) => item)
        .join("<br>");
    }
    return {
      title: "Ha ocurrido un error",
      message: message,
      type: "error",
      duration: 5000,
      position: "bottom-right",
    };
  },
  getSucessFromAxios: (title: string): IToast => {
    return {
      title: title,
      type: "success",
      duration: 3500,
    };
  },
  toHourAndDay: (value: number) => {
    if (value < 48) return `${value} Hrs.`;
    const days = Math.floor(value / 24);
    const hours = Math.round(value % 24);
    return `${days}D ${hours} hrs.`;
  },
  formatNumber: (number: any, precision = 2): number => {
    number = parseFloat(number);
    if (isNaN(number)) {
      return 0.0;
    }
    return Number(number.toFixed(precision));
  },

 
  shortNumber: (number: number) => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
    }).format(number);
  },
  formatStorage: function (size: number, unit: 'MB' | 'GB' | 'TB' | 'KB' = 'MB') {
    const sizes = {
      KB: size/(1*10**3) ,
      MB: size/(1*10**6),
      GB: size / (1*10**9),
      TB: size / (1*10**12)
    }
    let shortValue = this.shortNumber(sizes[unit]);
    if (sizes[unit] < 1) {
      unit = sizes[Object.keys(sizes).indexOf(unit) - 1] || 'KB';
      shortValue = this.shortNumber(sizes[unit]);
      return `${shortValue} ${unit}`
    } else if (sizes[unit] > 1000) {
      unit = sizes[Object.keys(sizes).indexOf(unit) + 1] || 'GB';
      shortValue = this.shortNumber(sizes[unit]);
      return `${shortValue} ${unit}`
    }
    return `${shortValue} ${unit}`;
  },
  formatMoney: (number: any, precision = 2) => {
    number = parseFloat(number);
    if (isNaN(number)) {
      return "$" + "0.00";
    }
    return (
      "$" + number.toLocaleString("en-US", { minimumFractionDigits: precision })
    );
  },
  uppercaseFirst(str: string) {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
  },

  

  getDistanceBetween: async (target: [number, number], origin?: [number, number], unit?: string): Promise<any> => {

    let distance: any = 0;
    if (!origin) {
      distance = await new Promise((resolve) => navigator.geolocation?.getCurrentPosition((position) => {
        origin = [position.coords.latitude, position.coords.longitude];
        resolve(calculateDistance(target, origin));
      })).then((result) => result);
    } else {
      distance = await Promise.resolve(calculateDistance(target, origin));
    }

    switch (unit) {
      case "km":
        return (Number(distance) / 1000).toFixed(2) + " km";
      case "yrd":
        return (Number(distance) / 1.0936).toFixed(2) + " yrd";
      case "mi":
        return (distance / 1609.34).toFixed(2) + " mi";
      default:
        return distance + " m";
    }
  },

  getAge: (date: string) => {
    if (!date) return;
    const now = dayjs();
    const birthday = dayjs(date);
    let age = now.diff(birthday, "year");
    return age;
  },

  dateDiff: (from: string, to: string, unit: string = 'days') => {
    const date1 = from ? new Date(from) : new Date();
    const date2 = to ? new Date(to) : new Date();
    const diffTime = Math.abs(date2.getTime() - date1.getTime());
    const diffDaysInMinutes = diffTime / (1000 * 60);
    const diffInHours = diffTime / (1000 * 60 * 60);
    const diffInDays = diffTime / (1000 * 60 * 60 * 24);
    const diffInWeeks = diffTime / (1000 * 60 * 60 * 24 * 7);
    const diffInMonths = diffTime / (1000 * 60 * 60 * 24 * 30);
    const diffInYears = diffTime / (1000 * 60 * 60 * 24 * 365);
    const result = {
      days: diffInDays.toFixed(2) + (Number(diffInDays)>1) ? ' días' : ' día',
      hours: diffInHours.toFixed(2) + (Number(diffInHours)>1) ? ' horas' : ' hora',
      minutes: diffDaysInMinutes.toFixed(2) + (Number(diffDaysInMinutes)>1) ? ' minutos' : ' minuto',
      weeks: diffInWeeks.toFixed(2) + (Number(diffInWeeks)>1) ? ' semanas' : ' semana',
      months: diffInMonths.toFixed(2) + (Number(diffInMonths)>1) ? ' meses' : ' mes',
      years: diffInYears.toFixed(2) + (Number(diffInYears)>1) ? ' años' : ' año',
    }
    return result[unit];
  },

  duration: (from: string, to?: string) => {
    const date1 = from ? dayjs(from) : dayjs();
    const date2 = to ? dayjs(to) : dayjs();

    const seconds = date2.diff(date1, 'seconds');
    const minutes = date2.diff(date1, 'minutes');
    const hours = date2.diff(date1, 'hours');
    const days = date2.diff(date1, 'days');
    const months = date2.diff(date1, 'months');
    const weeks = date2.diff(date1, 'weeks');
    const years = date2.diff(date1, 'years');

    const result = {
      seconds: Math.floor(seconds % 60),
      minutes: Math.floor(minutes % 60),
      hours: Math.floor(hours % 24),
      days: Math.floor(days % 30),
      months: Math.floor(months % 12),
      weeks: Math.floor(weeks),
      years: Math.floor(years),
    }
    return result

  },

  debounce: (fn: Function, wait: number) => {
    return function (...args: any[]) {
      if (timer) {
        clearTimeout(timer);
      }
      const context = this;
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, wait);
    };
  },

  async encrypt(text: string, secretKey: string) {
    const encoder = new TextEncoder();
    const keyData = encoder.encode(secretKey);
    const keyHash = await crypto.subtle.digest("SHA-256", keyData); // Asegura 256 bits para AES-256
    const key = await crypto.subtle.importKey(
      "raw",
      keyHash, // Usamos el hash como clave
      { name: "AES-CBC" },
      false,
      ["encrypt"]
    );
    const iv = crypto.getRandomValues(new Uint8Array(16)); // IV aleatorio adecuado
    const encryptedData = await crypto.subtle.encrypt(
      { name: "AES-CBC", iv },
      key,
      encoder.encode(text)
    );
    return {
      encrypted: Array.from(new Uint8Array(encryptedData)),
      iv: Array.from(iv),
    };
  },

  onConfirm(
    options: ConfirmationOptions,
    confirm: {
      require: (option: ConfirmationOptions) => void;
      close: () => void;
    }
  ) {
    confirm.require(options);
  },
  onConfirmPopup(
    options: ConfirmationOptions,
    confirm: {
      require: (option: ConfirmationOptions) => void;
      close: () => void;
    }
  ) {
    confirm.require(options);
  },

  toastError(toast: ToastServiceMethods, errorKey = 'server_error') {
    let errorTitle = 'Ha ocurrido un error';

    toast.add({
      severity: 'error',
      summary: errorTitle,
      detail: errorKey,
      life: 3000,
    });
  },
  toastSucess(toast: ToastServiceMethods, sucessKey = 'success_op', omitTranslate: boolean = false) {
    toast.add({
      severity: 'success',
      summary: 'Acción realizada correctamente',
      detail: sucessKey,
      life: 3000,
      omitTranslate
    } as any);
  },

  throwValidationError(toast: ToastServiceMethods, $v: Ref<Validation>) {
    $v.value.$touch();
    if ($v.value.$invalid) {
      const element: HTMLElement = document.querySelector(`#${$v.value.$errors[0]?.$property}`)!;
      element?.focus();
      this.toastError(toast, 'invalid_data');
      throw new Error('data_invalid');
    }
  },

  setLocalWithPrefix(key: string, value: any) {
    localStorage.setItem(import.meta.env.VITE_LOCAL_PREFIX + key, value);
  },

  getLocalWithPrefix(key: string) {
    return localStorage.getItem(import.meta.env.VITE_LOCAL_PREFIX + key);
  },
};

function calculateDistance(target: [number, number], origin: [number, number]) {
  origin = origin || [0, 0];
  target = target || [0, 0];
  const [lat1, lon1] = target;
  const [lat2, lon2] = origin;
  const R = 6371e3;
  const p1 = lat1 * Math.PI / 180;
  const p2 = lat2 * Math.PI / 180;
  const deltaP = p2 - p1;
  const deltaLon = lon2 - lon1;
  const deltaLambda = (deltaLon * Math.PI) / 180;
  const a = Math.sin(deltaP / 2) * Math.sin(deltaP / 2) +
    Math.cos(p1) * Math.cos(p2) *
    Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const d = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)) * R;
  let result = d;
  return result.toFixed(2);
}