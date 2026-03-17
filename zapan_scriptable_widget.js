/* ====== ZAPAN DAILY STREAK WIDGET (SCRIPTABLE) ======
 * Hướng dẫn cài đặt iOS Khẩn Cấp:
 * 1. Tải ứng dụng 'Scriptable' miễn phí từ App Store
 * 2. Mở Scriptable, bấm '+' ở góc trên phải để tạo Script mới
 * 3. Copy/Paste toàn bộ đoạn code (từ dòng 6 trở xuống) vào
 * 4. Đổi tên Script thành "ZaPan Widget"
 * 5. Ra ngoài màn hình iPhone (Home Screen), nhấn giữ khoảng trống -> thêm Widget Scriptable
 * 6. Sửa Widget, chọn Script là "ZaPan Widget"
 * 7. (Quan trọng) Trong ô Parameter của Widget, điền ĐỊA CHỈ WEB BẠN LƯU FIREBASE DB CỦA ZA PAN
 *    ví dụ: https://ban-zapan-project.firebaseapp.com 
 * ======================================================= */

const WIDGET_URL = args.widgetParameter || "https://zapan-learning-app.com"; 

async function createWidget() {
  const widget = new ListWidget();
  widget.backgroundColor = new Color("#1e293b"); // Bảng màu Dark Mode Tailwind
  
  // Tinh chỉnh Layout
  widget.setPadding(16, 16, 16, 16);
  widget.url = WIDGET_URL; // Khi bấm vào nó tự bật PWA lên

  const headerStack = widget.addStack();
  headerStack.centerAlignContent();
  
  const iconText = headerStack.addText("🔥");
  iconText.font = Font.systemFont(28);
  headerStack.addSpacer(8);
  
  const titleText = headerStack.addText("Za Pan");
  titleText.textColor = new Color("#94a3b8");
  titleText.font = Font.boldSystemFont(14);
  headerStack.addSpacer();

  // Đáng lẽ khúc này phải gọi API tới Firestore REST API. 
  // Vì Firebase cần Auth Token bí mật, giả lập call để DEMO 
  // (Trong thực tế cần cấu hình Cloud Function Public endpoint return streak)
  let streak = "N/A";
  
  // Giả lập giao diện Streak
  widget.addSpacer(12);
  const mainStack = widget.addStack();
  mainStack.layoutHorizontally();
  mainStack.centerAlignContent();

  const numText = mainStack.addText("TBD");
  numText.textColor = new Color("#f97316"); // Màu Orange đập mắt
  numText.font = Font.blackSystemFont(42);
  
  mainStack.addSpacer(8);
  
  const subText = mainStack.addText("Ngày\nLiên tiếp");
  subText.textColor = new Color("#f8fafc");
  subText.font = Font.mediumSystemFont(12);
  
  widget.addSpacer(8);
  const footText = widget.addText("Truy cập App để cập nhật");
  footText.textColor = new Color("#64748b");
  footText.font = Font.systemFont(10);
  
  return widget;
}

if (config.runsInWidget) {
  const widget = await createWidget();
  Script.setWidget(widget);
} else {
  // Preview in app
  const widget = await createWidget();
  widget.presentSmall();
}
Script.complete();
