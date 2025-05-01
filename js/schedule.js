let currentDate = new Date();
let selectedDay = null;
let schedules = {}; // 각 날짜에 대한 일정 저장

function generateCalendar() {
  const calendar = document.getElementById("calendar");
  const monthYear = document.getElementById("monthYear");
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const totalDaysInMonth = lastDateOfMonth.getDate();

  monthYear.textContent = `${currentYear}년 ${currentMonth + 1}월`;

  calendar.innerHTML = ""; // 달력 초기화

  // 첫날 전까지 빈 칸 추가
  for (let i = 0; i < firstDayOfWeek; i++) {
    const emptyCell = document.createElement("div");
    calendar.appendChild(emptyCell);
  }

  // 날짜 추가
  for (let day = 1; day <= totalDaysInMonth; day++) {
    const dayCell = document.createElement("div");
    dayCell.textContent = day;

    // 일정이 있는 날짜에 작은 이미지 표시
    if (schedules[`${currentYear}-${currentMonth + 1}-${day}`]) {
      dayCell.classList.add("has-schedule");
    }

    // 날짜 클릭 시 모달 열기
    dayCell.onclick = function () {
      openModal(day);
    };

    calendar.appendChild(dayCell);
  }
}

function openModal(day) {
  selectedDay = day;
  document.getElementById("schedule-modal").style.display = "block";
}

function closeModal() {
  document.getElementById("schedule-modal").style.display = "none";
}

function addSchedule() {
  const scheduleInput = document.getElementById("schedule-input").value;
  if (scheduleInput) {
    const key = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${selectedDay}`;
    schedules[key] = scheduleInput; // 일정 저장
    generateCalendar(); // 달력 새로 고침
    updateScheduleList(); // 일정 목록 업데이트
  }
  closeModal();
}

function updateScheduleList() {
  const scheduleItemsContainer = document.getElementById("schedule-items");
  scheduleItemsContainer.innerHTML = ""; // 기존 리스트 초기화

  // 모든 일정 표시
  for (let date in schedules) {
    const scheduleItem = document.createElement("div");
    scheduleItem.classList.add("schedule-item");
    scheduleItem.textContent = `${date}: ${schedules[date]}`;
    scheduleItemsContainer.appendChild(scheduleItem);
  }
}

// 이전 달로 이동
document.getElementById("prevMonthBtn").addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  generateCalendar();
});

// 다음 달로 이동
document.getElementById("nextMonthBtn").addEventListener("click", function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  generateCalendar();
});

// 페이지 로드 시 달력 생성
window.onload = function () {
  generateCalendar();
  updateScheduleList(); // 초기 일정 목록 표시
};
