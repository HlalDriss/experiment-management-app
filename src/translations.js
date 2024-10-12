// src/translations.js

const translations = {
  en: {
    title: "Experiment Management",
    stepTitles: [
      "Basic Information",
      "Experiment Details",
      "Scheduling & Safety"
    ],
    labels: {
      experimentTitle: "Experiment Title",
      requestDate: "Request Date",
      experimentDate: "Experiment Date",
      selectTeacher: "Select Teacher",
      objective: "Objective of Experiment",
      numberOfGroups: "Number of Groups",
      notes: "Notes for Lab Technician",
      submit: "Submit",
      next: "Next",
      back: "Back",
    },
    errors:{
      required: "Please fill in all required fields!",
    }
  },
  ar: {
    title: "إدارة التجارب",
    stepTitles: [
      "معلومات أساسية",
      "تفاصيل التجربة",
      "جدولة و السلامة"
    ],
    labels: {
      experimentTitle: "عنوان التجربة",
      requestDate: "تاريخ الطلب",
      experimentDate: "تاريخ التجربة",
      selectTeacher: "اختيار المعلم",
      objective: "هدف التجربة",
      numberOfGroups: "عدد المجموعات",
      notes: "ملاحظات لفني المختبر",
      submit: "إرسال",
      next: "التالي",
      back: "رجوع",
    },
    errors:{
      required: "يرجى ملء جميع الحقول المطلوبة!",
      }
  }
};

export default translations;
