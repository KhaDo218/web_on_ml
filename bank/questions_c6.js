// ============================================================================
// CHƯƠNG 6: PyQt6 & Microsoft GUI (Tích hợp ML và thiết kế giao diện)
// Nguồn: Slide 09 (PyQt6 và tích hợp mô hình máy học) và Slide 10 (Microsoft GUI)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// C(code) tạo khối code nhiều dòng.
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c6-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c6-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });
const C = (code) => "\n```\n" + code + "\n```\n";

const ABC = "Công ty bán lẻ ABC có nhiều chi nhánh, dữ liệu purchase_retails gồm các cột invoice_no, customer_id, gender, age, category, quantity, price, payment_method, invoice_date, shopping_mall. ";

const QUESTIONS_C6 = [
// ================= PYQT6 - CASE STUDY CÔNG TY ABC =================
M("q54", 6, 1, "Mục tiêu khi tích hợp mô hình máy học vào phần mềm PyQt6 gồm những gì?",
  ["Thiết kế giao diện phù hợp để triển khai mô hình máy học", "Thực hiện đầy đủ các bước cần thiết của chu trình phát triển mô hình", "Triệu gọi mô hình và hiển thị kết quả lên các Widget của PyQt6", "Viết lại thư viện scikit-learn"], 3,
  "Đồng thời ứng dụng các Widget từ cơ bản đến nâng cao của PyQt6."),

S("q1", 6, 1, ABC + "Mô hình hồi quy tuyến tính được dùng để dự báo biến mục tiêu nào?",
  ["price (khả năng chi tiêu)", "gender", "payment_method", "shopping_mall"],
  "Dự báo price dựa vào gender, age (và payment_method)."),

M("q55", 6, 2, ABC + "Hai mô hình hồi quy tuyến tính được yêu cầu xây dựng dùng những tập biến đầu vào nào?",
  ["gender và age", "gender, age và payment_method", "category và shopping_mall", "invoice_no và customer_id"], 2,
  "Biến mục tiêu đều là price."),

S("q2", 6, 2, ABC + "Mô hình gom cụm khách hàng dùng những tiêu chí nào?",
  ["gender, age, payment_method", "price, quantity, category", "invoice_date, shopping_mall", "customer_id, invoice_no"],
  "Dùng K-Means, chọn số cụm bằng phương pháp Elbow."),

S("q56", 6, 2, "Muốn đưa các cột gender (Male/Female) và payment_method (Cash/Credit Card/Debit Card) vào mô hình hồi quy hoặc K-Means, cần làm gì trước?",
  ["Mã hóa giá trị chữ thành số (ví dụ Female = 0, Male = 1; Cash = 0, Credit Card = 1, Debit Card = 2)", "Xóa hai cột này", "Đổi tên cột", "Chuyển sang kiểu ngày tháng"],
  "Thuật toán chỉ làm việc trên dữ liệu số; histogram payment_method có giá trị 0.0, 1.0, 2.0."),

S("q3", 6, 2, ABC + "Khi gom cụm theo gender, age, payment_method, đồ thị Elbow cho inertia giảm rất mạnh đến K = 3, sau đó gần như phẳng. Nên chọn số cụm là bao nhiêu?",
  ["3", "1", "10", "6"],
  "Chọn điểm khuỷu tay, nơi mức giảm của inertia chậm lại rõ rệt."),

M("q4", 6, 2, ABC + "Những thống kê nào được yêu cầu để hỗ trợ công ty ra quyết định?",
  ["Tỉ lệ mua hàng theo giới tính, theo nhóm độ tuổi", "Phân bổ mua hàng theo danh mục, số lượng mua theo danh mục và giới tính", "Tỉ lệ phương thức thanh toán, tỉ lệ mua theo chi nhánh, biến động doanh số theo tháng/năm", "Thống kê số lượng nhân viên theo phòng ban"], 3,
  "Dữ liệu không có thông tin nhân viên."),

S("q57", 6, 2, "Thống kê tỉ lệ lựa chọn phương thức thanh toán (Cash, Credit Card, Debit Card) giúp công ty bán lẻ điều gì?",
  ["Có phương án thay đổi phương thức thanh toán hiệu quả nhất cho khách hàng", "Tính lương nhân viên", "Dự báo thời tiết", "Phân loại sản phẩm lỗi"],
  "Thống kê tỉ lệ mua theo chi nhánh giúp điều chỉnh kinh doanh theo khu vực."),

S("q58", 6, 2, "Thống kê phân bổ mua hàng theo danh mục nhằm mục đích gì?",
  ["Nhận biết danh mục bán nhiều nhất, ít nhất để tiếp cận khách hàng theo danh mục phù hợp hơn", "Xác định giới tính khách hàng", "Tính thuế", "Gom cụm chi nhánh"],
  "Thường biểu diễn bằng biểu đồ tròn (Categories Distribution)."),

S("q5", 6, 2, "Một mô hình in ra `Gender=Female and Age=61 and payment=Credit Card=>Price=[686.61184381]`. Đây là kết quả của bài toán gì?",
  ["Dự báo khả năng chi tiêu (price) bằng hồi quy tuyến tính dựa trên gender, age, payment_method", "Phân loại phương thức thanh toán", "Gom cụm khách hàng", "Thống kê tần suất mua hàng"],
  "Đầu ra là giá trị số liên tục nên là hồi quy."),

S("q11", 6, 2, "Mô hình hồi quy dự báo price có MSE ≈ 900755.14. RMSE xấp xỉ bao nhiêu?",
  ["949.08", "450377.57", "695.80", "30.01"],
  "RMSE = sqrt(MSE) ≈ 949.08."),

S("q59", 6, 2, "Sau khi huấn luyện xong mô hình dự báo price, chương trình in `ret save model=True`. Điều này cho biết gì?",
  ["Mô hình đã được lưu thành công để tái sử dụng", "Mô hình huấn luyện thất bại", "Dữ liệu đã bị xóa", "MSE bằng True"],
  "Lưu mô hình để lần sau chỉ cần tải và dự đoán."),

S("q6", 6, 1, "Biểu đồ nào phù hợp để biểu diễn tỉ lệ phần trăm mua hàng theo giới tính (Gender Distribution)?",
  ["Biểu đồ tròn (pie chart)", "Biểu đồ đường", "Biểu đồ phân tán", "Histogram"],
  "Pie chart thể hiện cơ cấu tỉ lệ."),

S("q7", 6, 2, "Muốn thể hiện số lượt mua theo từng độ tuổi và giới tính (Age VS Order Frequence) với mỗi điểm là một cặp (tuổi, số lượt), loại biểu đồ nào phù hợp?",
  ["Biểu đồ phân tán (scatter plot)", "Biểu đồ tròn", "Biểu đồ 3D", "Bản đồ nhiệt"],
  "Mỗi điểm biểu diễn một nhóm (age, gender) và số lượt mua."),

S("q8", 6, 2, "Muốn so sánh tổng giá trị mua hàng giữa các danh mục (Books, Clothing, Shoes...), loại biểu đồ nào phù hợp?",
  ["Biểu đồ cột (bar chart)", "Biểu đồ tròn 3D", "Biểu đồ phân tán", "Biểu đồ hộp"],
  "Biểu đồ cột so sánh giá trị giữa các nhóm rời rạc."),

S("q60", 6, 2, "Muốn so sánh số lượng mua theo danh mục giữa Female và Male trên cùng một biểu đồ, loại nào phù hợp?",
  ["Biểu đồ cột nhóm (grouped bar) với mỗi giới tính một màu", "Biểu đồ tròn", "Một đường duy nhất", "Biểu đồ phân tán 3D"],
  "Mỗi danh mục có 2 cột cạnh nhau."),

S("q9", 6, 2, "Biểu diễn biến động doanh số theo tháng của các năm 2021, 2022, 2023 trên cùng một biểu đồ nên dùng cách nào?",
  ["Biểu đồ đường, mỗi năm một đường (trục x là tháng)", "Ba biểu đồ tròn", "Biểu đồ phân tán không chú thích", "Một cột duy nhất"],
  "Giúp so sánh xu hướng giữa các năm."),

S("q10", 6, 2, "Để trực quan hóa kết quả gom cụm khách hàng theo 3 thuộc tính dưới dạng 3D có thể xoay và xem chi tiết từng điểm, dùng thư viện nào?",
  ["Plotly (plotly.express.scatter_3d)", "Seaborn histplot", "Tkinter", "Excel"],
  "Biểu đồ hiển thị trên trình duyệt và có hover_data."),

S("q61", 6, 3, "Sau khi gom cụm, chương trình in danh sách 'Customer in cluster 0', 'Customer in cluster 1'... Cách lấy danh sách khách hàng của cụm 0 từ DataFrame df có cột cluster là gì?",
  ["df[df['cluster'] == 0]", "df.cluster(0)", "df.loc['cluster' == 0]", "df.groupby(0)"],
  "Lọc dòng theo điều kiện trên cột cluster."),

// ================= MICROSOFT GUI: TỔNG QUAN & FORM =================
S("q62", 6, 1, "Thứ tự phát triển công nghệ giao diện của Microsoft là gì?",
  ["Console/cmd -> Windows Form -> WPF -> Universal", "WPF -> Console -> Universal -> Windows Form", "Universal -> WPF -> Windows Form -> Console", "Windows Form -> Console -> Universal -> WPF"],
  "Công cụ lập trình: Visual Studio."),

S("q12", 6, 1, "Trong C# Windows Forms, đối tượng nào đại diện cho một cửa sổ hoặc hộp thoại của ứng dụng?",
  ["Form", "Panel", "Label", "Control"],
  "Form tạo nên giao diện người dùng của ứng dụng."),

S("q63", 6, 1, "Cách thêm một Form mới vào project Windows Forms trong Visual Studio là gì?",
  ["Chuột phải vào tên Project -> Add -> chọn Form (Windows Forms)", "File -> New -> Database", "Chuột phải vào Form1 -> Delete", "Tools -> Options -> Form"],
  "Sau đó đặt tên Form và thiết kế giao diện."),

S("q13", 6, 1, "Thuộc tính nào của Form dùng để đổi tiêu đề trên thanh tiêu đề?",
  ["Text", "Name", "Title", "Caption"],
  "Name là tên dùng trong code."),

S("q14", 6, 2, "Thuộc tính nào quy định vị trí Form khi chạy (Manual, CenterScreen, WindowsDefaultLocation, WindowsDefaultBounds, CenterParent)?",
  ["StartPosition", "Location", "WindowState", "TopMost"],
  "Location là tọa độ góc trên bên trái của Form."),

S("q64", 6, 2, "Thuộc tính WindowState của Form nhận những giá trị nào?",
  ["Normal, Minimized, Maximized", "None, FixedSingle, Sizable", "True, False", "Manual, CenterScreen"],
  "WindowState là trạng thái cửa sổ."),

S("q65", 6, 2, "Thuộc tính TopMost = true của Form có tác dụng gì?",
  ["Form luôn hiển thị nằm trên cùng các cửa sổ khác", "Form ở góc trên màn hình", "Form không thể đóng", "Form có thanh menu ở trên"],
  "Gets or sets whether the form should be displayed as a topmost form."),

S("q15", 6, 2, "Thuộc tính FormBorderStyle của Form có tác dụng gì?",
  ["Quy định kiểu viền Form: None, FixedSingle, Fixed3D, FixedDialog, Sizable, FixedToolWindow, SizableToolWindow", "Đổi màu nền", "Đặt ảnh nền", "Đặt độ trong suốt"],
  "Sizable cho phép kéo đổi kích thước."),

S("q66", 6, 2, "Thuộc tính nào của Form điều chỉnh độ trong suốt của cửa sổ?",
  ["Opacity", "BackColor", "Visible", "Transparent"],
  "Ví dụ Opacity = 80%."),

M("q67", 6, 2, "Những thuộc tính nào là thuộc tính của Windows Form?",
  ["BackColor, BackgroundImage, ForeColor", "MainMenuStrip, Cursor, Icon", "Location, Opacity, Font", "PasswordChar, Multiline"], 3,
  "PasswordChar, Multiline là thuộc tính của TextBox."),

S("q16", 6, 2, "Thuộc tính AcceptButton của Form có tác dụng gì?",
  ["Chỉ định nút được kích hoạt khi người dùng nhấn phím ENTER", "Chỉ định nút được kích hoạt khi nhấn ESC", "Ẩn mọi nút trên Form", "Đặt nút mặc định ở góc phải"],
  "CancelButton là nút được kích hoạt khi nhấn ESC."),

S("q68", 6, 2, "Trên form đăng nhập có nút Login và Exit. Muốn nhấn ESC thì tương đương bấm nút Exit, ta đặt thuộc tính nào của Form?",
  ["CancelButton = nút Exit", "AcceptButton = nút Exit", "KeyPreview = nút Exit", "TabIndex của Exit = 0"],
  "AcceptButton dành cho phím ENTER."),

S("q17", 6, 1, "Sự kiện Load của Form xảy ra khi nào?",
  ["Trước khi Form được hiển thị lần đầu", "Sau khi Form đóng", "Khi người dùng click vào Form", "Khi nhấn phím"],
  "Thường dùng để khởi tạo dữ liệu, ví dụ nạp phần tử cho ListBox."),

S("q18", 6, 2, "Sự kiện FormClosing và FormClosed khác nhau thế nào?",
  ["FormClosing xảy ra trước khi Form đóng; FormClosed xảy ra sau khi Form đã đóng", "FormClosing xảy ra sau khi đóng; FormClosed xảy ra trước", "Hai sự kiện giống nhau", "FormClosed xảy ra khi mở Form"],
  "FormClosing có thể dùng để hỏi xác nhận trước khi thoát."),

S("q69", 6, 2, "Sự kiện nào xảy ra khi một phím được NHẢ ra trong lúc control đang có focus?",
  ["KeyUp", "KeyDown", "KeyPress", "Click"],
  "KeyDown và KeyPress xảy ra khi phím được nhấn."),

M("q19", 6, 2, "Những sự kiện nào liên quan đến chuột của Form/Control?",
  ["MouseClick, MouseDoubleClick", "MouseEnter, MouseHover, MouseLeave", "MouseDown, MouseUp, MouseMove, MouseWheel", "KeyPress, KeyUp"], 3,
  "KeyPress, KeyUp là sự kiện bàn phím."),

S("q70", 6, 2, "Sự kiện nào xảy ra khi con trỏ chuột dừng lại (rest) trên control?",
  ["MouseHover", "MouseEnter", "MouseMove", "MouseLeave"],
  "MouseEnter: khi chuột đi vào; MouseLeave: khi chuột rời đi."),

// ================= CONTAINER =================
S("q20", 6, 1, "Mục đích chính của control Panel là gì?",
  ["Tạo vùng để nhóm, sắp xếp các control; kéo Panel thì toàn bộ control bên trong di chuyển theo", "Hiển thị hình ảnh", "Nhập mật khẩu", "Vẽ biểu đồ"],
  "Panel nằm trong nhóm Containers của Toolbox."),

S("q71", 6, 2, "Đặt thuộc tính Dock = Top cho một Panel thì Panel sẽ thế nào?",
  ["Neo vào cạnh trên của Form và giãn theo chiều ngang của Form", "Ẩn đi", "Nằm giữa Form", "Xoay 90 độ"],
  "Dock có các giá trị None, Top, Bottom, Left, Right, Fill."),

S("q21", 6, 2, "Control FlowLayoutPanel có đặc điểm gì?",
  ["Tự động sắp xếp các control bên trong theo một hướng (FlowDirection: LeftToRight, TopDown, RightToLeft, BottomUp)", "Chỉ chứa được một control", "Dùng để vẽ biểu đồ", "Tự động chia Form thành hai nửa"],
  "Khác Panel thường phải tự đặt vị trí từng control."),

S("q22", 6, 2, "Control SplitContainer dùng để làm gì?",
  ["Chia vùng thành hai panel (Panel1, Panel2) có thanh chia, có thể đặt Orientation là Vertical hoặc Horizontal", "Hiển thị dữ liệu dạng cây", "Nhập ngày tháng", "Hiển thị ảnh"],
  "Người dùng có thể kéo thanh chia để thay đổi kích thước hai vùng."),

// ================= CONTROL CƠ BẢN =================
S("q23", 6, 1, "Control nào dùng để hiển thị một chuỗi văn bản trên Form (tên thường bắt đầu bằng lbl)?",
  ["Label", "TextBox", "Button", "ComboBox"],
  "Thuộc tính: Name, Text, BackColor, ForeColor, Font."),

S("q72", 6, 1, "Quy ước đặt tên control nào đúng?",
  ["Label: lbl, TextBox: txt, CheckBox: chk, RadioButton: rad, PictureBox: pic, ListBox: lst, ComboBox: cbo, DateTimePicker: dtp", "Label: txt, TextBox: lbl", "ListBox: cbo, ComboBox: lst", "PictureBox: dtp, DateTimePicker: pic"],
  "Đặt tiền tố giúp nhận biết loại control trong code."),

S("q73", 6, 1, "TextBox được dùng để làm gì?",
  ["Cho người dùng nhập thông tin vào chương trình", "Hiển thị ảnh", "Chọn ngày", "Hiển thị biểu đồ"],
  "Thuộc tính Enabled quyết định TextBox có hoạt động hay không."),

S("q24", 6, 1, "Thuộc tính PasswordChar của TextBox có tác dụng gì?",
  ["Khai báo ký tự thay thế khi nhập mật khẩu (ví dụ '*')", "Mã hóa mật khẩu", "Giới hạn độ dài", "Kiểm tra độ mạnh mật khẩu"],
  "Nội dung thật vẫn nằm trong thuộc tính Text."),

S("q25", 6, 1, "Thuộc tính Multiline = true của TextBox có tác dụng gì?",
  ["Cho phép nội dung viết trên nhiều dòng", "Cho phép nhiều người nhập", "Hiển thị nhiều TextBox", "Tự động xuống dòng mỗi ký tự"],
  "Mặc định TextBox chỉ một dòng."),

S("q26", 6, 1, "Thuộc tính ReadOnly = true của TextBox có tác dụng gì?",
  ["Chỉ cho đọc, không cho sửa nội dung", "Ẩn TextBox", "Xóa nội dung", "Chuyển chữ thành in hoa"],
  "Khác Enabled = false là control bị vô hiệu hóa hoàn toàn."),

S("q74", 6, 2, "Form phân loại GPA cần: 4.00-3.67 Excellent (Blue), 3.66-3.00 Very Good (Green), 2.99-2.33 Good (Purple), 2.32-2.00 Fair (Orange), dưới 2.00 Fail (Red). Nhập GPA = 3.20 thì kết quả là gì?",
  ["Very Good, màu Green", "Excellent, màu Blue", "Good, màu Purple", "Fair, màu Orange"],
  "3.20 nằm trong khoảng 3.00 - 3.66."),

S("q27", 6, 1, "Control nào cho phép người dùng chọn NHIỀU lựa chọn cùng lúc?",
  ["CheckBox", "RadioButton", "Label", "ProgressBar"],
  "RadioButton chỉ cho chọn 1 trong nhóm."),

S("q28", 6, 2, "Khi thiết kế RadioButton, bắt buộc phải kết hợp với control nào để nhóm các lựa chọn?",
  ["GroupBox", "Panel", "ListBox", "TextBox"],
  "Mỗi GroupBox là một nhóm lựa chọn độc lập."),

S("q75", 6, 1, "Thuộc tính nào cho biết CheckBox hoặc RadioButton đang được chọn?",
  ["Checked (true là đang chọn)", "Selected", "Value", "IsOn"],
  "Text là tiêu đề hiển thị bên phải control."),

S("q29", 6, 1, "Control PictureBox dùng để làm gì?",
  ["Hiển thị hình ảnh trên giao diện", "Nhập văn bản", "Hiển thị danh sách", "Chọn ngày tháng"],
  "Dùng thuộc tính Image hoặc BackgroundImage."),

S("q30", 6, 2, "Thuộc tính SizeMode của PictureBox dùng để làm gì?",
  ["Thiết lập cách ảnh hiển thị (co giãn, căn giữa, phóng to theo khung...)", "Thay đổi kích thước file ảnh", "Đổi định dạng ảnh", "Xoay ảnh"],
  "BackgroundImageLayout có vai trò tương tự với BackgroundImage."),

S("q31", 6, 2, "DateTimePicker khác MonthCalendar thế nào?",
  ["DateTimePicker hiển thị gọn một ô ngày, bấm mới hiện lịch; MonthCalendar luôn hiển thị lịch tháng", "DateTimePicker chỉ chọn giờ", "MonthCalendar chỉ chọn năm", "Hai control giống nhau"],
  "Cả hai dùng để hiển thị và chọn ngày."),

S("q32", 6, 2, "Muốn DateTimePicker hiển thị ngày theo định dạng riêng (ví dụ dd/MM/yyyy) thì làm gì?",
  ["Đặt Format = Custom và khai báo chuỗi định dạng ở CustomFormat", "Đặt Value = dd/MM/yyyy", "Đặt Text = Custom", "Không thể tùy chỉnh"],
  "Value là giá trị ngày trên control."),

// ================= LISTBOX - COMBOBOX - RICHTEXTBOX =================
S("q33", 6, 1, "Control nào tạo danh sách cho người dùng chọn một hoặc nhiều phần tử, có sự kiện mặc định SelectedIndexChanged?",
  ["ListBox", "ComboBox", "TextBox", "Label"],
  "ComboBox không hỗ trợ chọn nhiều."),

S("q34", 6, 2, "Thuộc tính SelectionMode của ListBox dùng để làm gì?",
  ["Quy định chọn một hay cho phép chọn nhiều phần tử", "Sắp xếp danh sách", "Đổi màu phần tử được chọn", "Ẩn danh sách"],
  "Khi chọn nhiều, dùng SelectedItems / SelectedIndices."),

S("q35", 6, 1, "Thuộc tính nào trả về chỉ số phần tử đang được chọn trong ListBox?",
  ["SelectedIndex", "SelectedItem", "Items.Count", "SelectedIndices"],
  "SelectedItem trả về chính phần tử; SelectedIndices trả về tập chỉ số khi chọn nhiều."),

S("q76", 6, 1, "Thuộc tính nào trả về số phần tử của ListBox?",
  ["Items.Count", "Items.Length", "Count()", "SelectedItems"],
  "Ví dụ listBox1.Items.Count."),

M("q36", 6, 2, "Những phương thức nào của `listBox1.Items` dùng để thêm phần tử?",
  ["Add", "AddRange", "Insert", "RemoveAt"], 3,
  "RemoveAt xóa theo vị trí; Remove xóa phần tử; Clear xóa tất cả; OfType lọc phần tử cùng kiểu."),

S("q77", 6, 2, "Phương thức `Items.OfType` của ListBox/ComboBox dùng để làm gì?",
  ["Lọc ra các phần tử có cùng kiểu dữ liệu", "Đếm số phần tử", "Sắp xếp phần tử", "Xóa phần tử trùng"],
  "Ví dụ lấy các phần tử kiểu string."),

S("q37", 6, 2, "Đoạn code trong sự kiện Load sau thêm gì vào ListBox?" + C(`listBox1.Items.Clear();
for (int i = 0; i < 10; i++)
    listBox1.Items.Add("Item " + i);`),
  ["10 phần tử từ 'Item 0' đến 'Item 9'", "10 phần tử từ 'Item 1' đến 'Item 10'", "1 phần tử 'Item 10'", "9 phần tử"],
  "Clear() xóa dữ liệu cũ trước khi thêm."),

S("q78", 6, 2, "Khi người dùng chọn 'Item 3' trong ListBox, sự kiện sau hiển thị gì trên lblMessage?" + C(`private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
{
    lblMessage.Text = listBox1.Text + " was clicked!";
}`),
  ["Item 3 was clicked!", "3 was clicked!", "listBox1 was clicked!", " was clicked!"],
  "listBox1.Text là văn bản của phần tử đang chọn."),

S("q79", 6, 1, "Cách nhập dữ liệu cho ListBox/ComboBox ngay lúc thiết kế (Design Time) là gì?",
  ["Mở thuộc tính Items (Collection) trong cửa sổ Properties và nhập từng dòng", "Viết code trong sự kiện Load", "Kết nối CSDL", "Kéo thả file Excel vào control"],
  "Ngoài ra có thể thêm bằng code lúc chạy (Run Time)."),

S("q38", 6, 2, "ComboBox khác ListBox ở điểm cơ bản nào?",
  ["ComboBox hiển thị dạng danh sách thả xuống và không hỗ trợ chọn nhiều phần tử", "ComboBox chỉ chứa số", "ComboBox không có thuộc tính Items", "ComboBox không có SelectedIndex"],
  "Tên ComboBox thường bắt đầu bằng cbo."),

S("q39", 6, 2, "Control nào hiển thị văn bản có định dạng (đậm, nghiêng, nhiều màu, nhiều đoạn) trên Form?",
  ["RichTextBox", "TextBox", "Label", "MaskedTextBox"],
  "RichTextBox hỗ trợ định dạng phong phú."),

// ================= LISTVIEW - DATAGRIDVIEW - TREEVIEW =================
S("q40", 6, 1, "Control ListView dùng để làm gì?",
  ["Hiển thị dữ liệu dạng lưới (dòng, cột), có thể nhóm dữ liệu", "Nhập mật khẩu", "Hiển thị một ảnh", "Chọn ngày"],
  "Các nội dung: tạo, thuộc tính, sự kiện, thêm, xóa, sửa, nhóm dữ liệu."),

S("q41", 6, 2, "Thuộc tính nào dùng để tạo các cột cho ListView?",
  ["Columns", "Items", "Rows", "Headers"],
  "Mỗi cột là một ColumnHeader. Để thấy cột cần đặt View = Details."),

S("q42", 6, 2, "Đoạn code sau làm gì?" + C(`ListViewItem lvi = new ListViewItem((listView1.Items.Count + 1) + "");
lvi.SubItems.Add("9999");
lvi.SubItems.Add("Blade");
listView1.Items.Add(lvi);`),
  ["Thêm một dòng mới: cột đầu là số thứ tự, các cột tiếp theo là 9999 và Blade", "Xóa dòng có mã 9999", "Sửa dòng thứ 9999", "Tạo 3 cột mới"],
  "Cột đầu là Text của ListViewItem; các cột sau là SubItems."),

S("q43", 6, 2, "Lệnh `listView1.Items.RemoveAt(2);` làm gì?",
  ["Xóa dòng tại vị trí index 2 (dòng thứ ba)", "Xóa 2 dòng đầu", "Xóa cột thứ 2", "Xóa dòng có mã '2'"],
  "Items.Remove(lviDelete) xóa theo đối tượng."),

S("q80", 6, 2, "Trong sự kiện SelectedIndexChanged của ListView, lệnh nào lấy dòng đang được chọn?",
  ["ListViewItem lvi = listView1.SelectedItems[0];", "ListViewItem lvi = listView1.SelectedIndex;", "ListViewItem lvi = listView1.Text;", "ListViewItem lvi = listView1.Items.Selected;"],
  "SelectedItems là tập dòng được chọn; [0] là dòng đầu tiên."),

S("q81", 6, 2, "Trong sự kiện ColumnClick của ListView, `e.Column == 0` cho biết điều gì?",
  ["Người dùng vừa click vào tiêu đề cột đầu tiên", "Không có cột nào", "Dòng đầu được chọn", "ListView rỗng"],
  "Thường dùng để sắp xếp theo cột được click."),

S("q44", 6, 2, "Điểm đặc biệt của DataGridView so với ListView là gì?",
  ["Có thể hiển thị bảng từ kết nối CSDL hoặc từ List đối tượng bằng thuộc tính DataSource", "Chỉ hiển thị được 1 cột", "Không có dòng", "Không hiển thị được số"],
  "DataGridView cũng hiển thị dữ liệu theo dòng và cột."),

S("q45", 6, 2, "Đoạn code sau hiển thị gì?" + C(`List<Product> products = new List<Product>();
products.Add(new Product { Barcode = "111-222", Name = "Coca", Price = 25000 });
products.Add(new Product { Barcode = "111-333", Name = "Pepsi", Price = 24000 });
dataGridView1.DataSource = products;`),
  ["DataGridView hiển thị 2 dòng với các cột Barcode, Name, Price", "Không hiển thị gì vì thiếu Columns", "Chỉ hiển thị cột Name", "Lỗi vì List không gán được cho DataSource"],
  "Các cột được tạo tự động từ thuộc tính public của lớp Product."),

S("q82", 6, 2, "Lớp Product dùng cho DataGridView khai báo như sau. Cú pháp `{ get; set; }` là gì?" + C(`public class Product
{
    public string Barcode { get; set; }
    public string Name { get; set; }
    public double Price { get; set; }
}`),
  ["Auto-implemented property cho phép đọc và gán giá trị thuộc tính", "Phương thức khởi tạo", "Sự kiện", "Biến tĩnh"],
  "DataGridView đọc các property để tạo cột."),

S("q46", 6, 1, "Control TreeView dùng để làm gì?",
  ["Hiển thị dữ liệu dạng cây thư mục, trực quan hóa dữ liệu phân cấp", "Hiển thị biểu đồ", "Nhập văn bản dài", "Chọn ngày"],
  "Ví dụ cây công ty: Công ty XYZ -> Phòng Nhân Sự -> nhân viên."),

M("q83", 6, 2, "Những thuộc tính/thành phần nào thường dùng với TreeView?",
  ["Nodes, TreeNode, SelectedNode", "ImageList, ImageIndex, SelectedImageIndex", "Expand, Collapse, Add, Remove", "PasswordChar, Multiline"], 3,
  "PasswordChar, Multiline là của TextBox."),

S("q47", 6, 3, "Đoạn code sau làm gì?" + C(`tvSample.Nodes.Clear();
TreeNode rootNode = new TreeNode(txtRoot.Text);
rootNode.ImageIndex = 0;
rootNode.SelectedImageIndex = rootNode.ImageIndex;
tvSample.Nodes.Add(rootNode);`),
  ["Xóa các node cũ, tạo node gốc với tên lấy từ txtRoot, gán ảnh từ ImageList và thêm vào TreeView", "Xóa node đang chọn", "Mở rộng toàn bộ cây", "Đổi tên TreeView"],
  "ImageIndex là ảnh lúc bình thường; SelectedImageIndex là ảnh khi được chọn."),

S("q48", 6, 2, "Thuộc tính nào lấy node đang được chọn trong TreeView?",
  ["SelectedNode", "SelectedItem", "CurrentNode", "FocusedNode"],
  "TreeNode tNode = tvSample.SelectedNode;"),

S("q49", 6, 2, "Lệnh nào xóa node đang được chọn khỏi TreeView?",
  ["tvSample.Nodes.Remove(tvSample.SelectedNode);", "tvSample.SelectedNode.Clear();", "tvSample.Remove();", "tvSample.Nodes.Clear();"],
  "Nodes.Clear() xóa toàn bộ cây."),

S("q84", 6, 2, "Sự kiện nào của TreeView xảy ra sau khi người dùng chọn một node (tham số e.Node)?",
  ["AfterSelect", "SelectedIndexChanged", "ColumnClick", "NodeClosed"],
  "private void treeView1_AfterSelect(object sender, TreeViewEventArgs e)."),

S("q85", 6, 2, "Muốn TreeView hiển thị icon cho từng node, cần kết hợp với thành phần nào?",
  ["ImageList", "PictureBox", "Panel", "RichTextBox"],
  "Node chọn ảnh theo ImageIndex trong ImageList."),

// ================= CHART =================
S("q50", 6, 1, "Control Chart trong Windows Forms dùng để làm gì?",
  ["Vẽ biểu đồ trực quan hóa dữ liệu (cột, đường, tròn...)", "Hiển thị bảng dữ liệu", "Nhập dữ liệu", "Hiển thị cây thư mục"],
  "Dữ liệu được gắn vào các Series của Chart."),

S("q51", 6, 2, "Để biểu đồ trong Chart là dạng thanh (Bar), ta dùng lệnh nào?",
  ["chart1.Series[0].ChartType = SeriesChartType.Bar;", "chart1.Type = Bar;", "chart1.ChartAreas[0].Style = Bar;", "chart1.Series[0].Kind = \"Bar\";"],
  "SeriesChartType còn có Column, Line, Pie..."),

S("q52", 6, 2, "Để hiển thị giá trị số ngay trên mỗi cột/thanh của Chart, đặt thuộc tính nào bằng true?",
  ["chart1.Series[0].IsValueShownAsLabel", "chart1.Series[0].ShowValue", "chart1.Legends[0].Enabled", "chart1.Series[0].IsVisibleInLegend"],
  "LegendText đặt chữ cho chú thích."),

S("q53", 6, 2, "Có mảng `Quaters` (tên các quý) và mảng `Y` (doanh số). Lệnh nào gán dữ liệu cho Series của Chart?",
  ["chart1.Series[0].Points.DataBindXY(Quaters, Y);", "chart1.DataSource = Quaters;", "chart1.Series[0].Add(Quaters, Y);", "chart1.Points.Bind(Y, Quaters);"],
  "DataBindXY nhận mảng giá trị trục X và trục Y."),

S("q86", 6, 1, "Lệnh `chart1.Series[0].LegendText = \"Legend here\";` có tác dụng gì?",
  ["Đặt nội dung chú thích (legend) cho Series", "Đặt tiêu đề biểu đồ", "Đặt nhãn trục X", "Đổi màu Series"],
  "Legend giúp người xem biết Series biểu diễn gì."),
];
module.exports = QUESTIONS_C6;
