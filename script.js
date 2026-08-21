/* =========================================================
   ELEMENTS
========================================================= */

const cards =
  document.querySelectorAll(
    ".accordion-card"
  );


const headers =
  document.querySelectorAll(
    ".accordion-header"
  );


const pathSteps =
  document.querySelectorAll(
    ".path-step"
  );


const languageButtons =
  document.querySelectorAll(
    ".lang-btn"
  );


const backToTop =
  document.getElementById(
    "backToTop"
  );


const backToFirst =
  document.getElementById(
    "backToFirst"
  );


const heroTitle =
  document.getElementById(
    "heroTitle"
  );



/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {


  /* =======================================================
     THAI
  ======================================================= */

  th: {

    heroTag:
      "QUICK MANUAL",

    heroTitle:
      'คู่มือการใช้งาน <strong>BIT Telemedicine</strong>',

    heroDescription:
      "เลือกขั้นตอนที่ต้องการเพื่อดูวิธีการใช้งาน BIT Telemedicine",

    previous:
      "ขั้นตอนก่อนหน้า",

    next:
      "ขั้นตอนถัดไป",

    backToFirst:
      "กลับไปขั้นตอนแรก",

    multiImages:
      "เพิ่มรูปคู่มือได้หลายรูป",

    verticalScroll:
      "เลื่อนขึ้น–ลงเพื่อดูขั้นตอนทั้งหมด",


    steps: [

      {
        title:
          "ลงทะเบียนใช้งาน",

        subtitle:
          "สร้างบัญชีผู้ใช้งานและยืนยันข้อมูลเพื่อเข้าใช้บริการ",

        detailTitle:
          "ขั้นตอนการลงทะเบียนใช้งาน",

        detail:
          "กรอกข้อมูลส่วนตัวและยืนยันตัวตนเพื่อสร้างบัญชี BIT Telemedicine"
      },


      {
        title:
          "ทำนัดหมาย",

        subtitle:
          "เลือกวัน เวลา และแพทย์ที่ต้องการนัดหมาย",

        detailTitle:
          "ขั้นตอนการทำนัดหมาย",

        detail:
          "เลือกวัน เวลา และแพทย์ตามบริการที่ต้องการ"
      },


      {
        title:
          "พยาบาลคัดกรอง",

        subtitle:
          "ประเมินอาการเบื้องต้นและเตรียมข้อมูลก่อนพบแพทย์",

        detailTitle:
          "ขั้นตอนการคัดกรอง",

        detail:
          "พยาบาลประเมินอาการเบื้องต้นและจัดเตรียมข้อมูลที่จำเป็นก่อนพบแพทย์"
      },


      {
        title:
          "พบแพทย์ผ่านวิดีโอ",

        subtitle:
          "พบแพทย์ออนไลน์ พร้อม AI ช่วยสรุปการรักษาและจัดทำร่าง OPD",

        detailTitle:
          "พบแพทย์ผ่านวิดีโอ",

        detail:
          "พบแพทย์ผ่านวิดีโอ โดย AI ช่วยสรุปการรักษา เสนอแนวทางการวินิจฉัย และจัดทำร่าง OPD"
      },


      {
        title:
          "ชำระค่าบริการ",

        subtitle:
          "โรงพยาบาลสรุปค่าใช้จ่ายและผู้ป่วยชำระเงิน",

        detailTitle:
          "การชำระค่าบริการ",

        detail:
          "โรงพยาบาลสรุปค่าใช้จ่ายและผู้ป่วยดำเนินการชำระเงินผ่านช่องทางที่กำหนด"
      },


      {
        title:
          "นัดติดตามการรักษา",

        subtitle:
          "นัดหมายเพื่อติดตามอาการและผลการรักษา",

        detailTitle:
          "นัดติดตามการรักษา",

        detail:
          "เลือกวันและเวลาสำหรับติดตามอาการและผลการรักษาครั้งถัดไป"
      },


      {
        title:
          "สรุปการรักษา & ใบสั่งยา",

        subtitle:
          "ดูสรุปการรักษาและใบสั่งยาหลังพบแพทย์",

        detailTitle:
          "สรุปการรักษา & ใบสั่งยา",

        detail:
          "ตรวจสอบรายละเอียดการรักษาและใบสั่งยาหลังจากเสร็จสิ้นการพบแพทย์"
      },


      {
        title:
          "ติดตามการจัดส่งยา",

        subtitle:
          "ตรวจสอบสถานะและความคืบหน้าของการจัดส่งยา",

        detailTitle:
          "ติดตามการจัดส่งยา",

        detail:
          "ตรวจสอบสถานะและความคืบหน้าของการจัดส่งยา"
      },


      {
        title:
          "รับยาและตรวจสอบยา",

        subtitle:
          "ตรวจสอบรายการยาและยืนยันว่าได้รับยาเรียบร้อยแล้ว",

        detailTitle:
          "รับยาและตรวจสอบยา",

        detail:
          "ตรวจสอบรายการยาและยืนยันการได้รับยา โดยสามารถถ่ายรูปหรือวิดีโอประกอบการยืนยันได้"
      },


      {
        title:
          "นัดหมายเภสัชกร",

        subtitle:
          "เลือกวันและเวลาสำหรับรับคำแนะนำจากเภสัชกร",

        detailTitle:
          "นัดหมายเภสัชกร",

        detail:
          "เลือกวันและเวลาสำหรับรับคำแนะนำเกี่ยวกับยาและวิธีใช้ยาจากเภสัชกร"
      },


      {
        title:
          "พบเภสัชกรผ่านวิดีโอ",

        subtitle:
          "รับคำแนะนำเกี่ยวกับการใช้ยาจากเภสัชกรผ่านวิดีโอ",

        detailTitle:
          "พบเภสัชกรผ่านวิดีโอ",

        detail:
          "พูดคุยกับเภสัชกรผ่านวิดีโอเพื่อรับคำแนะนำเกี่ยวกับวิธีใช้ยาและข้อควรระวัง"
      }

    ]

  },



  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {

    heroTag:
      "QUICK MANUAL",

    heroTitle:
      'BIT Telemedicine <strong>Quick Manual</strong>',

    heroDescription:
      "Select a step to view instructions for using BIT Telemedicine.",

    previous:
      "Previous Step",

    next:
      "Next Step",

    backToFirst:
      "Back to Step 1",

    multiImages:
      "Multiple manual images can be added",

    verticalScroll:
      "Scroll vertically to view all instructions",


    steps: [

      {
        title:
          "Registration",

        subtitle:
          "Create an account and verify your information to access the service",

        detailTitle:
          "Registration",

        detail:
          "Enter your personal information and complete identity verification to create a BIT Telemedicine account."
      },


      {
        title:
          "Appointment",

        subtitle:
          "Select your preferred appointment date, time, and doctor",

        detailTitle:
          "Appointment",

        detail:
          "Select the preferred date, time, and doctor for the required service."
      },


      {
        title:
          "Nurse Screening",

        subtitle:
          "Complete an initial symptom assessment before seeing the doctor",

        detailTitle:
          "Nurse Screening",

        detail:
          "A nurse performs an initial symptom assessment and prepares the required information before the consultation."
      },


      {
        title:
          "Video Consultation",

        subtitle:
          "Consult the doctor online with AI-assisted treatment documentation",

        detailTitle:
          "Video Consultation",

        detail:
          "Consult the doctor by video while AI assists with the treatment summary, suggested diagnosis, and OPD draft."
      },


      {
        title:
          "Payment",

        subtitle:
          "Review hospital charges and complete payment",

        detailTitle:
          "Payment",

        detail:
          "The hospital calculates the service charges and the patient completes payment through the available payment method."
      },


      {
        title:
          "Follow-up Appointment",

        subtitle:
          "Schedule a follow-up to monitor symptoms and treatment progress",

        detailTitle:
          "Follow-up Appointment",

        detail:
          "Select the date and time for the next appointment to monitor symptoms and treatment progress."
      },


      {
        title:
          "Treatment Summary & Prescription",

        subtitle:
          "Review the treatment summary and prescription after consultation",

        detailTitle:
          "Treatment Summary & Prescription",

        detail:
          "Review the treatment details and prescription after completing the doctor consultation."
      },


      {
        title:
          "Delivery Tracking",

        subtitle:
          "Track the status and progress of medication delivery",

        detailTitle:
          "Delivery Tracking",

        detail:
          "Check the current status and progress of the medication delivery."
      },


      {
        title:
          "Receive & Check Medication",

        subtitle:
          "Verify the medication and confirm successful receipt",

        detailTitle:
          "Receive & Check Medication",

        detail:
          "Check the received medication and confirm receipt. A photo or video may be used for confirmation when required."
      },


      {
        title:
          "Pharmacist Appointment",

        subtitle:
          "Select a date and time for consultation with the pharmacist",

        detailTitle:
          "Pharmacist Appointment",

        detail:
          "Choose a suitable date and time to receive medication guidance from the pharmacist."
      },


      {
        title:
          "Telepharmacy",

        subtitle:
          "Receive medication counseling from the pharmacist by video",

        detailTitle:
          "Telepharmacy",

        detail:
          "Consult the pharmacist by video to receive medication instructions and important precautions."
      }

    ]

  },



  /* =======================================================
     KOREAN
  ======================================================= */

  ko: {

    heroTag:
      "빠른 사용 가이드",

    heroTitle:
      'BIT Telemedicine <strong>빠른 사용 가이드</strong>',

    heroDescription:
      "원하는 단계를 선택하여 BIT Telemedicine 이용 방법을 확인하세요.",

    previous:
      "이전 단계",

    next:
      "다음 단계",

    backToFirst:
      "첫 단계로 돌아가기",

    multiImages:
      "여러 개의 안내 이미지를 추가할 수 있습니다",

    verticalScroll:
      "위아래로 스크롤하여 모든 단계를 확인하세요",


    steps: [

      {
        title:
          "회원가입",

        subtitle:
          "서비스 이용을 위해 계정을 생성하고 정보를 인증합니다",

        detailTitle:
          "회원가입",

        detail:
          "개인 정보를 입력하고 본인 인증을 완료하여 BIT Telemedicine 계정을 생성합니다."
      },


      {
        title:
          "진료 예약",

        subtitle:
          "원하는 진료 날짜, 시간 및 의료진을 선택합니다",

        detailTitle:
          "진료 예약",

        detail:
          "필요한 서비스에 따라 원하는 날짜, 시간 및 의료진을 선택합니다."
      },


      {
        title:
          "간호사 사전 문진",

        subtitle:
          "의사 진료 전 초기 증상을 확인하고 정보를 준비합니다",

        detailTitle:
          "간호사 사전 문진",

        detail:
          "간호사가 초기 증상을 확인하고 의사 진료 전에 필요한 정보를 준비합니다."
      },


      {
        title:
          "화상 진료",

        subtitle:
          "AI 지원과 함께 온라인으로 의사 진료를 받습니다",

        detailTitle:
          "화상 진료",

        detail:
          "화상으로 의사와 진료하며 AI가 진료 요약, 진단 제안 및 OPD 초안 작성을 지원합니다."
      },


      {
        title:
          "결제",

        subtitle:
          "병원에서 진료 비용을 확인한 후 결제를 진행합니다",

        detailTitle:
          "결제",

        detail:
          "병원이 서비스 비용을 계산하면 환자가 제공된 결제 방법으로 비용을 결제합니다."
      },


      {
        title:
          "추적 진료 예약",

        subtitle:
          "증상과 치료 경과 확인을 위한 다음 진료를 예약합니다",

        detailTitle:
          "추적 진료 예약",

        detail:
          "증상과 치료 경과를 확인하기 위한 다음 진료 날짜와 시간을 선택합니다."
      },


      {
        title:
          "진료 요약 및 처방전",

        subtitle:
          "진료 후 진료 요약과 처방전을 확인합니다",

        detailTitle:
          "진료 요약 및 처방전",

        detail:
          "의사 진료가 완료된 후 진료 내용과 처방전을 확인합니다."
      },


      {
        title:
          "약 배송 조회",

        subtitle:
          "약 배송 상태와 진행 상황을 확인합니다",

        detailTitle:
          "약 배송 조회",

        detail:
          "약 배송의 현재 상태와 진행 상황을 확인합니다."
      },


      {
        title:
          "약 수령 및 확인",

        subtitle:
          "약을 확인하고 정상적으로 수령했는지 인증합니다",

        detailTitle:
          "약 수령 및 확인",

        detail:
          "수령한 약을 확인하고 필요할 경우 사진 또는 동영상으로 수령을 인증합니다."
      },


      {
        title:
          "약사 상담 예약",

        subtitle:
          "약사 상담을 위한 날짜와 시간을 선택합니다",

        detailTitle:
          "약사 상담 예약",

        detail:
          "약과 복용 방법에 대한 안내를 받기 위해 약사 상담 날짜와 시간을 예약합니다."
      },


      {
        title:
          "화상 약사 상담",

        subtitle:
          "화상으로 약사에게 복약 안내를 받습니다",

        detailTitle:
          "화상 약사 상담",

        detail:
          "화상 상담을 통해 약사에게 복약 방법과 주의사항에 대한 안내를 받습니다."
      }

    ]

  }

};



/* =========================================================
   CHANGE LANGUAGE
========================================================= */

function changeLanguage(language) {

  const data =
    translations[language];


  if (!data) {
    return;
  }



  document.documentElement.lang =
    language;



  languageButtons.forEach(
    button => {

      button.classList.toggle(
        "active",
        button.dataset.lang === language
      );

    }
  );



  if (heroTitle) {

    heroTitle.innerHTML =
      data.heroTitle;

  }



  const generalTranslations = {

    heroTag:
      data.heroTag,

    heroDescription:
      data.heroDescription,

    previous:
      data.previous,

    next:
      data.next,

    backToFirst:
      data.backToFirst,

    multiImages:
      data.multiImages,

    verticalScroll:
      data.verticalScroll

  };


  Object.entries(
    generalTranslations
  )
  .forEach(
    ([key, value]) => {

      document
        .querySelectorAll(
          `[data-i18n="${key}"]`
        )
        .forEach(
          element => {

            element.textContent =
              value;

          }
        );

    }
  );



  data.steps.forEach(
    (step, index) => {

      const number =
        index + 1;


      const title =
        document.querySelector(
          `[data-step-title="${number}"]`
        );


      const subtitle =
        document.querySelector(
          `[data-step-subtitle="${number}"]`
        );


      const detailTitle =
        document.querySelector(
          `[data-step-detail-title="${number}"]`
        );


      const detail =
        document.querySelector(
          `[data-step-detail="${number}"]`
        );


      if (title) {

        title.textContent =
          step.title;

      }


if (subtitle) {

  if (language === "th") {

    // STEP 01
    if (number === 1) {
      subtitle.innerHTML =
        'สร้างบัญชีผู้ใช้งานและ<span class="mobile-line-break"><br></span>' +
        'ยืนยันข้อมูล<span class="mobile-line-break"><br></span>' +
        'เพื่อเข้าใช้บริการ';
    }

    // STEP 02
    else if (number === 2) {
      subtitle.innerHTML =
        'เลือก วัน เวลา และแพทย์<span class="mobile-line-break"><br></span>' +
        'ที่ต้องการนัดหมาย';
    }

    // STEP 04
    else if (number === 4) {
      subtitle.innerHTML =
        'พบแพทย์ออนไลน์<span class="mobile-line-break"><br></span>' +
        'พร้อม AI ช่วย<span class="mobile-line-break"><br></span>' +
        'สรุปการรักษา และ<span class="mobile-line-break"><br></span>' +
        'จัดทำร่าง OPD';
    }

    // STEP 07
    else if (number === 7) {
      subtitle.innerHTML =
        'ดูสรุปการรักษา และ<span class="mobile-line-break"><br></span>' +
        'ใบสั่งยา หลังพบแพทย์';
    }

    // STEP 08
    else if (number === 8) {
      subtitle.innerHTML =
        'ตรวจสอบสถานะ และ<span class="mobile-line-break"><br></span>' +
        'ความคืบหน้า<span class="mobile-line-break"><br></span>' +
        'ของการจัดส่งยา';
    }

    // STEP 09
    else if (number === 9) {
      subtitle.innerHTML =
        'ตรวจสอบรายการยา<span class="mobile-line-break"><br></span>' +
        'และ ยืนยันว่าได้รับยา<span class="mobile-line-break"><br></span>' +
        '<span class="step09-nowrap">เรียบร้อยแล้ว</span>';
    }

    // STEP 11
    else if (number === 11) {
      subtitle.innerHTML =
        'รับคำแนะนำเกี่ยวกับ<span class="mobile-line-break"><br></span>' +
        'การใช้ยา จากเภสัชกร<span class="mobile-line-break"><br></span>' +
        'ผ่านวิดีโอ';
    }

    // STEP อื่น ๆ ไม่เปลี่ยน
    else {
      subtitle.textContent = step.subtitle;
    }

  } else {
    subtitle.textContent = step.subtitle;
  }
}


      if (detailTitle) {

        detailTitle.textContent =
          step.detailTitle;

      }


      if (detail) {

        detail.textContent =
          step.detail;

      }

    }
  );

}



/* =========================================================
   UPDATE PATH
========================================================= */

function updatePath(stepNumber) {

  pathSteps.forEach(
    button => {

      const step =
        Number(
          button.dataset.step
        );


      button.classList.remove(
        "active",
        "completed"
      );


      if (
        step === stepNumber
      ) {

        button.classList.add(
          "active"
        );

      }


      if (
        step < stepNumber
      ) {

        button.classList.add(
          "completed"
        );

      }

    }
  );

}



/* =========================================================
   OPEN STEP
========================================================= */

function openStep(stepNumber) {

  cards.forEach(
    card => {

      const header =
        card.querySelector(
          ".accordion-header"
        );


      const arrow =
        card.querySelector(
          ".accordion-arrow"
        );


      const currentStep =
        Number(
          header.dataset.step
        );


      if (
        currentStep === stepNumber
      ) {

        card.classList.add(
          "open"
        );


        if (arrow) {

          arrow.textContent =
            "▲";

        }

      }

      else {

        card.classList.remove(
          "open"
        );


        if (arrow) {

          arrow.textContent =
            "▼";

        }

      }

    }
  );


  updatePath(
    stepNumber
  );


  const target =
    document.getElementById(
      `step-${stepNumber}`
    );


  if (target) {

    setTimeout(
      () => {

        target.scrollIntoView({

          behavior:
            "smooth",

          block:
            "start"

        });

      },
      80
    );

  }

}



/* =========================================================
   CLOSE STEP
========================================================= */

function closeStep(stepNumber) {

  const card =
    document.getElementById(
      `step-${stepNumber}`
    );


  if (!card) {
    return;
  }


  card.classList.remove(
    "open"
  );


  const arrow =
    card.querySelector(
      ".accordion-arrow"
    );


  if (arrow) {

    arrow.textContent =
      "▼";

  }

}



/* =========================================================
   HEADER CLICK
========================================================= */

headers.forEach(
  header => {

    header.addEventListener(
      "click",
      () => {

        const step =
          Number(
            header.dataset.step
          );


        const card =
          header.closest(
            ".accordion-card"
          );


        if (
          card.classList.contains(
            "open"
          )
        ) {

          closeStep(
            step
          );

        }

        else {

          openStep(
            step
          );

        }

      }
    );

  }
);



/* =========================================================
   PATH CLICK
========================================================= */

pathSteps.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        const step =
          Number(
            button.dataset.step
          );


        openStep(
          step
        );

      }
    );

  }
);



/* =========================================================
   NEXT
========================================================= */

document
  .querySelectorAll(
    "[data-next]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();


          const nextStep =
            Number(
              button.dataset.next
            );


          openStep(
            nextStep
          );

        }
      );

    }
  );



/* =========================================================
   PREVIOUS
========================================================= */

document
  .querySelectorAll(
    "[data-prev]"
  )
  .forEach(
    button => {

      button.addEventListener(
        "click",
        event => {

          event.stopPropagation();


          const previousStep =
            Number(
              button.dataset.prev
            );


          openStep(
            previousStep
          );

        }
      );

    }
  );



/* =========================================================
   STEP 11 -> STEP 01
========================================================= */

if (backToFirst) {

  backToFirst.addEventListener(
    "click",
    event => {

      event.stopPropagation();


      openStep(
        1
      );

    }
  );

}



/* =========================================================
   LANGUAGE BUTTON
========================================================= */

languageButtons.forEach(
  button => {

    button.addEventListener(
      "click",
      () => {

        changeLanguage(
          button.dataset.lang
        );

      }
    );

  }
);



/* =========================================================
   BACK TO TOP
========================================================= */

if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior:
          "smooth"

      });

    }
  );

}



/* =========================================================
   BROKEN ICON FALLBACK
========================================================= */

document
  .querySelectorAll(
    ".step-icon"
  )
  .forEach(
    image => {

      image.addEventListener(
        "error",
        () => {

          image.style.display =
            "none";

        }
      );

    }
  );



/* =========================================================
   INITIAL
========================================================= */

const urlParams =
  new URLSearchParams(
    window.location.search
  );

const requestedLanguage =
  urlParams.get("lang");

let initialLanguage = "th";

if (requestedLanguage === "en") {

  initialLanguage = "en";

}

else if (requestedLanguage === "kr") {

  initialLanguage = "ko";

}

else if (requestedLanguage === "ko") {

  initialLanguage = "ko";

}

else if (requestedLanguage === "th") {

  initialLanguage = "th";

}

changeLanguage(
  initialLanguage
);


updatePath(
  1
);