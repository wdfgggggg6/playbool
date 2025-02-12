// قائمة الأسئلة (100 سؤال)
const questions = [
  { question: "ما هو ناتج 5 × 6؟", options: ["25", "30", "35"], answer: "30" },
  { question: "ما هي عاصمة السعودية؟", options: ["الرياض", "جدة", "مكة"], answer: "الرياض" },
  { question: "كم عدد الألوان في قوس قزح؟", options: ["5", "6", "7"], answer: "7" },
  { question: "ما هو أطول جبل في العالم؟", options: ["إفرست", "كليمنجارو", "ألب"], answer: "إفرست" },
  { question: "ما هو العنصر الكيميائي الذي رمزه H؟", options: ["الأكسجين", "الهيدروجين", "النيتروجين"], answer: "الهيدروجين" },
  { question: "ما هو الحيوان الذي يُعرف بالحيوان المنتحر؟", options: ["النمر", "الأرنب", "الدب"], answer: "الأرنب" },
  { question: "ما هي أكبر دولة في العالم من حيث المساحة؟", options: ["روسيا", "الصين", "الولايات المتحدة"], answer: "روسيا" },
  { question: "ما هو الرقم التالي في السلسلة: 1, 3, 5, 7, ...؟", options: ["8", "9", "10"], answer: "9" },
  { question: "ما هو الشيء الذي لا يبتل عند الغوص في الماء؟", options: ["الظل", "الحجر", "الورق"], answer: "الظل" },
  { question: "ما هو آخر حرف في الأبجدية العربية؟", options: ["ي", "ن", "م"], answer: "ي" },
  { question: "ما هو ناتج 10 ÷ 2؟", options: ["4", "5", "6"], answer: "5" },
  { question: "ما هي عاصمة المغرب؟", options: ["مراكش", "الرباط", "فاس"], answer: "الرباط" },
  { question: "كم عدد الكواكب في المجموعة الشمسية؟", options: ["7", "8", "9"], answer: "8" },
  { question: "ما هو أعمق محيط في العالم؟", options: ["المحيط الأطلسي", "المحيط الهادئ", "المحيط الهندي"], answer: "المحيط الهادئ" },
  { question: "ما هو العنصر الكيميائي الذي رمزه C؟", options: ["الكربون", "الكلور", "الكالسيوم"], answer: "الكربون" },
  { question: "ما هو الحيوان الذي يُعرف بملك الغابة؟", options: ["الفهد", "النمر", "الأسد"], answer: "الأسد" },
  { question: "ما هي أصغر دولة في العالم؟", options: ["الفاتيكان", "موناكو", "سان مارينو"], answer: "الفاتيكان" },
  { question: "ما هو الرقم التالي في السلسلة: 2, 4, 8, 16, ...؟", options: ["24", "32", "64"], answer: "32" },
  { question: "ما هو الشيء الذي يتحدث ولا لسان له؟", options: ["التلفاز", "الراديو", "الجرس"], answer: "الجرس" },
  { question: "ما هو أول حرف في الأبجدية الإنجليزية؟", options: ["A", "B", "C"], answer: "A" },
  { question: "ما هو ناتج 15 - 7؟", options: ["6", "7", "8"], answer: "8" },
  { question: "ما هي عاصمة العراق؟", options: ["بغداد", "البصرة", "الموصل"], answer: "بغداد" },
  { question: "كم عدد القارات في العالم؟", options: ["5", "6", "7"], answer: "7" },
  { question: "ما هو أطول نهر في العالم؟", options: ["النيل", "الأمازون", "الفرات"], answer: "النيل" },
  { question: "ما هو العنصر الكيميائي الذي رمزه O؟", options: ["الأكسجين", "النيتروجين", "الهيدروجين"], answer: "الأكسجين" },
  { question: "ما هو الحيوان الذي يُعرف بسفينة الصحراء؟", options: ["الجمل", "النعامة", "الفيل"], answer: "الجمل" },
  { question: "ما هي أكبر مدينة في العالم من حيث عدد السكان؟", options: ["طوكيو", "بكين", "نيويورك"], answer: "طوكيو" },
  { question: "ما هو الرقم التالي في السلسلة: 10, 20, 30, 40, ...؟", options: ["45", "50", "60"], answer: "50" },
  { question: "ما هو الشيء الذي يُفتح ويُغلق ولكنه ليس بابًا؟", options: ["الصندوق", "العين", "الحقيبة"], answer: "العين" },
  { question: "ما هو أول شهر في السنة؟", options: ["يناير", "فبراير", "مارس"], answer: "يناير" },
  { question: "ما هو ناتج 8 + 7؟", options: ["14", "15", "16"], answer: "15" },
  { question: "ما هي عاصمة فرنسا؟", options: ["باريس", "مارسيليا", "ليون"], answer: "باريس" },
  { question: "كم عدد الأضلاع في مثلث؟", options: ["2", "3", "4"], answer: "3" },
  { question: "ما هو أسرع حيوان على وجه الأرض؟", options: ["النمر", "الغزال", "الصقر"], answer: "الصقر" },
  { question: "ما هو العنصر الكيميائي الذي رمزه Fe؟", options: ["الحديد", "الفضة", "الذهب"], answer: "الحديد" },
  { question: "ما هو الحيوان الذي يُعرف بصديق الإنسان؟", options: ["القط", "الكلب", "الحمار"], answer: "الكلب" },
  { question: "ما هي أقدم مدينة في العالم؟", options: ["أريحا", "القدس", "بغداد"], answer: "أريحا" },
  { question: "ما هو الرقم التالي في السلسلة: 3, 6, 9, 12, ...؟", options: ["15", "16", "18"], answer: "15" },
  { question: "ما هو الشيء الذي يدور حول نفسه وحول الشمس؟", options: ["القمر", "الأرض", "الشمس"], answer: "الأرض" },
  { question: "ما هو أول يوم في الأسبوع؟", options: ["السبت", "الأحد", "الاثنين"], answer: "الأحد" },
  { question: "ما هو ناتج 20 - 12؟", options: ["6", "8", "10"], answer: "8" },
  { question: "ما هي عاصمة تركيا؟", options: ["أنقرة", "إسطنبول", "إزمير"], answer: "أنقرة" },
  { question: "كم عدد الأضلاع في مربع؟", options: ["3", "4", "5"], answer: "4" },
  { question: "ما هو أثقل عنصر كيميائي؟", options: ["الأوزميوم", "الذهب", "الحديد"], answer: "الأوزميوم" },
  { question: "ما هو الحيوان الذي يُعرف بملك البراري؟", options: ["النمر", "الأسد", "الفهد"], answer: "الأسد" },
  { question: "ما هي أطول مدينة في العالم؟", options: ["نيويورك", "ساو باولو", "طوكيو"], answer: "نيويورك" },
  { question: "ما هو الرقم التالي في السلسلة: 5, 10, 15, 20, ...؟", options: ["25", "30", "35"], answer: "25" },
  { question: "ما هو الشيء الذي يُرى ولا يُمس؟", options: ["الهواء", "الظل", "الضوء"], answer: "الظل" },
  { question: "ما هو أول يوم في السنة؟", options: ["1 يناير", "1 فبراير", "1 مارس"], answer: "1 يناير" },
  { question: "ما هو ناتج 12 ÷ 3؟", options: ["3", "4", "5"], answer: "4" },
  { question: "ما هي عاصمة إيران؟", options: ["طهران", "شيراز", "أصفهان"], answer: "طهران" },
  { question: "كم عدد الأضلاع في خماسي الأضلاع؟", options: ["4", "5", "6"], answer: "5" },
  { question: "ما هو أسرع طائر في العالم؟", options: ["النسر", "الصقر", "الحمام"], answer: "الصقر" },
  { question: "ما هو العنصر الكيميائي الذي رمزه Au؟", options: ["الفضة", "الذهب", "الحديد"], answer: "الذهب" },
  { question: "ما هو الحيوان الذي يُعرف بصاحب الأذنين الطويلتين؟", options: ["الأرنب", "الجمل", "الفيل"], answer: "الأرنب" },
  { question: "ما هي أقصر دولة في العالم من حيث العمر؟", options: ["الفاتيكان", "سان مارينو", "موناكو"], answer: "الفاتيكان" },
  { question: "ما هو الرقم التالي في السلسلة: 100, 90, 80, 70, ...؟", options: ["60", "50", "40"], answer: "60" },
  { question: "ما هو الشيء الذي يمشي بلا أرجل؟", options: ["الساعة", "السيارة", "القارب"], answer: "الساعة" },
  { question: "ما هو أول يوم في الشهر؟", options: ["1", "2", "3"], answer: "1" },
  { question: "ما هو ناتج 9 × 9؟", options: ["81", "72", "63"], answer: "81" },
  { question: "ما هي عاصمة اليابان؟", options: ["طوكيو", "أوساكا", "كيوتو"], answer: "طوكيو" },
  { question: "كم عدد الأضلاع في سداسي الأضلاع؟", options: ["5", "6", "7"], answer: "6" },
  { question: "ما هو أقوى عضو في جسم الإنسان؟", options: ["القلب", "الدماغ", "الكبد"], answer: "الدماغ" },
  { question: "ما هو الحيوان الذي يُعرف بصاحب الذيل الطويل؟", options: ["القرد", "النمر", "الأسد"], answer: "القرد" },
  { question: "ما هي أطول سكة حديد في العالم؟", options: ["ترانس سيبيريا", "ترانس كندا", "ترانس أستراليا"], answer: "ترانس سيبيريا" },
  { question: "ما هو الرقم التالي في السلسلة: 1, 4, 9, 16, ...؟", options: ["25", "36", "49"], answer: "25" },
  { question: "ما هو الشيء الذي يأكل ولا يشبع؟", options: ["النار", "البحر", "الهواء"], answer: "النار" },
  { question: "ما هو أول يوم في الأسبوع الدراسي؟", options: ["الأحد", "الاثنين", "الثلاثاء"], answer: "الأحد" },
  { question: "ما هو ناتج 18 ÷ 3؟", options: ["5", "6", "7"], answer: "6" },
  { question: "ما هي عاصمة الهند؟", options: ["نيودلهي", "مومباي", "بنغالور"], answer: "نيودلهي" },
  { question: "كم عدد الأضلاع في ثماني الأضلاع؟", options: ["7", "8", "9"], answer: "8" },
  { question: "ما هو أذكى حيوان في العالم؟", options: ["القرد", "الدلفين", "النمر"], answer: "الدلفين" },
  { question: "ما هو العنصر الكيميائي الذي رمزه Ag؟", options: ["الفضة", "الذهب", "الحديد"], answer: "الفضة" },
  { question: "ما هو الحيوان الذي يُعرف بصاحب العينين الكبيرتين؟", options: ["البومة", "النسر", "الصقر"], answer: "البومة" },
  { question: "ما هي أقدم جامعة في العالم؟", options: ["الزيتونة", "القرويين", "الأزهر"], answer: "القرويين" },
  { question: "ما هو الرقم التالي في السلسلة: 2, 4, 6, 8, ...؟", options: ["10", "12", "14"], answer: "10" },
  { question: "ما هو الشيء الذي يجري بلا قدمين؟", options: ["الماء", "الهواء", "النار"], answer: "الماء" },
  { question: "ما هو أول يوم في الفصل الدراسي؟", options: ["الأحد", "الاثنين", "الثلاثاء"], answer: "الأحد" },
  { question: "ما هو ناتج 16 ÷ 4؟", options: ["3", "4", "5"], answer: "4" },
  { question: "ما هي عاصمة الصين؟", options: ["بكين", "شنغهاي", "قوانغتشو"], answer: "بكين" },
  { question: "كم عدد الأضلاع في تساعي الأضلاع؟", options: ["8", "9", "10"], answer: "9" },
  { question: "ما هو أقوى عظم في جسم الإنسان؟", options: ["عظم الفخذ", "الجمجمة", "العمود الفقري"], answer: "عظم الفخذ" },
  { question: "ما هو الحيوان الذي يُعرف بصاحب اللسان الطويل؟", options: ["التمساح", "الزرافة", "الضفدع"], answer: "التمساح" },
  { question: "ما هي أطول قناة مائية في العالم؟", options: ["قناة السويس", "قناة بنما", "قناة كيل"], answer: "قناة السويس" },
  { question: "ما هو الرقم التالي في السلسلة: 1, 2, 4, 7, ...؟", options: ["10", "11", "12"], answer: "11" },
  { question: "ما هو الشيء الذي يطير بلا أجنحة؟", options: ["الريح", "الدخان", "الغيوم"], answer: "الريح" },
  { question: "ما هو أول يوم في العام الدراسي؟", options: ["الأحد", "الاثنين", "الثلاثاء"], answer: "الأحد" },
  { question: "ما هو ناتج 25 ÷ 5؟", options: ["4", "5", "6"], answer: "5" },
  { question: "ما هي عاصمة البرازيل؟", options: ["ساو باولو", "ريو دي جانيرو", "برازيليا"], answer: "برازيليا" },
  { question: "كم عدد الأضلاع في عشري الأضلاع؟", options: ["9", "10", "11"], answer: "10" },
  { question: "ما هو أذكى طائر في العالم؟", options: ["الببغاء", "الغراب", "النسر"], answer: "الغراب" },
  { question: "ما هو العنصر الكيميائي الذي رمزه Pb؟", options: ["الرصاص", "الحديد", "الذهب"], answer: "الرصاص" },
  { question: "ما هو الحيوان الذي يُعرف بصاحب الأقدام الكبيرة؟", options: ["الفيل", "النمر", "الأسد"], answer: "الفيل" },
  { question: "ما هي أطول جسر في العالم؟", options: ["جسر الملك فهد", "جسر البحرين", "جسر الدانوب"], answer: "جسر الملك فهد" },
  { question: "ما هو الرقم التالي في السلسلة: 3, 6, 9, 12, ...؟", options: ["15", "16", "18"], answer: "15" },
  { question: "ما هو الشيء الذي يسير بلا قدمين؟", options: ["الساعة", "السيارة", "القارب"], answer: "الساعة" },
  { question: "ما هو أول يوم في الأسبوع الميلادي؟", options: ["الأحد", "الاثنين", "الثلاثاء"], answer: "الأحد" },
];

let currentLevel = parseInt(localStorage.getItem("currentLevel")) || 0;
let remainingAttempts = 3;
let isSeasonTwoUnlocked = localStorage.getItem("isSeasonTwoUnlocked") === "true";

// دالة خلط العناصر بشكل عشوائي
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// تحديث واجهة المستخدم
function updateUI() {
  const levelsContainer = document.getElementById("levelsContainer");
  levelsContainer.innerHTML = "";

  for (let i = 0; i < 100; i++) {
    const levelButton = document.createElement("div");
    levelButton.classList.add("level");
    if (i <= currentLevel) {
      levelButton.classList.add("unlocked");
      levelButton.textContent = i + 1;
      levelButton.addEventListener("click", () => loadLevel(i));
    } else {
      levelButton.classList.add("locked");
      levelButton.textContent = "🔒";
    }
    levelsContainer.appendChild(levelButton);
  }
}

// تحميل المرحلة
function loadLevel(level) {
  currentLevel = level;
  localStorage.setItem("currentLevel", currentLevel);

  const currentQuestion = questions[currentLevel];
  document.getElementById("currentLevelNumber").textContent = currentLevel + 1;
  document.getElementById("question").textContent = currentQuestion.question;

  const optionsContainer = document.getElementById("optionsContainer");
  optionsContainer.innerHTML = "";

  // خلط الخيارات
  const shuffledOptions = shuffle([...currentQuestion.options]);

  shuffledOptions.forEach(option => {
    const optionButton = document.createElement("button");
    optionButton.textContent = option;
    optionButton.addEventListener("click", () => checkAnswer(option));
    optionsContainer.appendChild(optionButton);
  });

  document.getElementById("remainingAttempts").textContent = remainingAttempts;
  document.getElementById("feedback").textContent = "";
  showPage("gamePage");
}

// التحقق من الإجابة
function checkAnswer(selectedOption) {
  const correctAnswer = questions[currentLevel].answer;

  if (selectedOption === correctAnswer) {
    document.getElementById("feedback").textContent = "إجابة صحيحة!";
    document.getElementById("feedback").style.color = "green";

    currentLevel++;
    localStorage.setItem("currentLevel", currentLevel);

    if (currentLevel < questions.length) {
      loadLevel(currentLevel);
    } else {
      showPage("winPage");
    }
  } else {
    remainingAttempts--;
    document.getElementById("remainingAttempts").textContent = remainingAttempts;

    if (remainingAttempts > 0) {
      document.getElementById("feedback").textContent = "إجابة خاطئة! حاول مرة أخرى.";
      document.getElementById("feedback").style.color = "red";
    } else {
      showPage("losePage");
    }
  }
}

// عرض الصفحة
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");

  // إذا كان الموسم الثاني مفتوحًا، اعرض صفحة الموسم الثاني فقط عند الضغط على الزر المخصص
  if (pageId === "seasonTwoPage" && isSeasonTwoUnlocked) {
    document.getElementById("seasonTwoPage").classList.remove("hidden");
  }
}

// تهيئة اللعبة
document.getElementById("startGame").addEventListener("click", () => {
  updateUI();
  showPage("levelsPage"); // دائمًا انتقل إلى صفحة المراحل عند النقر على "العب"
});

document.getElementById("backToHome").addEventListener("click", () => showPage("homePage"));
document.getElementById("backToLevels").addEventListener("click", () => showPage("levelsPage"));

document.getElementById("tryAgain").addEventListener("click", () => {
  remainingAttempts = 3;
  loadLevel(currentLevel);
  showPage("gamePage");
});

document.getElementById("nextSeason").addEventListener("click", () => {
  isSeasonTwoUnlocked = true;
  localStorage.setItem("isSeasonTwoUnlocked", "true");
  showPage("seasonTwoPage");
});

// تهيئة الصفحات
updateUI();
showPage("homePage");