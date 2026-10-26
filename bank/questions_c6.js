// ============================================================================
// CHƯƠNG 6: PyQt6 & Microsoft GUI (Tích hợp ML và Thiết kế giao diện)
// Soạn dựa trên Slide 09 và 10 của TS. Trần Duy Thanh
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c6-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c6-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C6 = [
// ================= PHẦN 1: PYQT6 & TÍCH HỢP ML =================
S("q1", 6, 1, "Trong Case Study của Công ty ABC (bán lẻ), mô hình Hồi quy tuyến tính (Linear Regression) được sử dụng để dự báo biến mục tiêu nào?",
  ["Price (Khả năng chi tiêu/số tiền mua hàng)", "Gender (Giới tính)", "Age (Độ tuổi)", "Payment_method (Phương thức thanh toán)"],
  "Slide 09: Xây dựng mô hình máy học sử dụng Hồi quy tuyến tính để dự báo: Dự báo khả năng chi tiêu (price) dựa vào Giới tính và độ tuổi..."),

S("q2", 6, 2, "Trong Case Study, mô hình Clustering (Gom cụm) được sử dụng để gom nhóm khách hàng dựa trên các tiêu chí nào?",
  ["gender, age, payment_method", "invoice_no, customer_id, category", "price, quantity, shopping_mall", "age, price, invoice_date"],
  "Slide 09: Xây dựng mô hình máy học để gom cụm khách hàng theo các tiêu chí: gender, age, payment_method."),

S("q3", 6, 2, "Theo kết quả đồ thị Elbow trong slide, số cụm (k) tối ưu được chọn để phân cụm khách hàng là bao nhiêu?",
  ["3", "4", "5", "2"],
  "Slide 09 (Hình Elbow method): Điểm khuỷu tay (elbow) xuất hiện tại vị trí Number of Clusters = 3."),

M("q4", 6, 2, "Theo yêu cầu của Công ty ABC, những thống kê nào sau đây cần được thực hiện để hỗ trợ ra quyết định kinh doanh?",
  ["Thống kê tỉ lệ mua hàng theo giới tính", "Thống kê mua hàng theo nhóm độ tuổi", "Thống kê phân bổ mua hàng theo danh mục", "Thống kê doanh thu của đối thủ cạnh tranh"], 3,
  "Slide 09: Các yêu cầu gồm thống kê theo giới tính, nhóm tuổi, danh mục, phương thức thanh toán, chi nhánh... Không có thống kê đối thủ."),

S("q5", 6, 3, "Trong hình minh họa kết quả dự báo của mô hình Linear Regression: `Gender=Female and Age=61 and payment=Credit Card=>Price=[686.61184381]`. Đây là bài toán dự báo gì?",
  ["Dự báo giá trị số liên tục (Hồi quy)", "Dự báo nhãn phân loại (Classification)", "Phân cụm khách hàng (Clustering)", "Dự báo chuỗi thời gian (Time series)"],
  "Slide 09 (Hình Console): Output trả về một giá trị số cụ thể (686.61), đây là đặc trưng của bài toán Hồi quy (Regression)."),

S("q6", 6, 3, "Trong kết quả đánh giá mô hình Linear Regression trên slide, các chỉ số MAE, MSE, RMSE lần lượt có giá trị xấp xỉ là:",
  ["695.79, 900755.13, 949.08", "949.08, 900755.13, 695.79", "695.79, 949.08, 900755.13", "900755.13, 695.79, 949.08"],
  "Slide 09 (Hình Console): MAE=695.799..., MSE=900755.136..., RMSE=949.081..."),

S("q7", 6, 2, "Để trực quan hóa kết quả phân cụm 3 chiều (3D) trong PyQt6/Python, slide sử dụng thư viện nào?",
  ["Plotly (px.scatter_3d)", "Matplotlib (plt.scatter)", "Seaborn (sns.scatterplot)", "PyQtGraph"],
  "Slide 09 (Hình 3D): Trình duyệt hiển thị biểu đồ 3D tương tác, đây là đặc trưng của thư viện Plotly Express (`px.scatter_3d`)."),

S("q8", 6, 2, "Trong các biểu đồ thống kê của Slide 09, biểu đồ nào được sử dụng để biểu diễn 'Thống kê tỉ lệ mua hàng theo giới tính'?",
  ["Biểu đồ tròn (Pie chart)", "Biểu đồ cột (Bar chart)", "Biểu đồ đường (Line chart)", "Biểu đồ phân tán (Scatter plot)"],
  "Slide 09 (Hình Gender Distribution): Sử dụng biểu đồ tròn (Pie chart) để thể hiện tỉ lệ phần trăm."),

// ================= PHẦN 2: MICROSOFT GUI (C# WINDOWS FORMS) =================
S("q9", 6, 1, "Trong lập trình giao diện với C# Windows Forms, đối tượng nào đại diện cho một cửa sổ hoặc hộp thoại của ứng dụng?",
  ["Form", "Window", "Dialog", "Panel"],
  "Slide 10: Form đại diện cho một cửa sổ hoặc hộp thoại tạo nên giao diện người dùng của ứng dụng."),

S("q10", 6, 2, "Thuộc tính nào của Form dùng để thay đổi tiêu đề (title bar) của cửa sổ?",
  ["Text", "Name", "Title", "Caption"],
  "Slide 10 (Bảng thuộc tính Form): Thuộc tính `Text` lấy hoặc thiết lập văn bản liên kết với control (đối với Form, đây là tiêu đề cửa sổ)."),

S("q11", 6, 2, "Thuộc tính `WindowState` của Form có các giá trị nào sau đây?",
  ["Normal, Minimized, Maximized", "Open, Close, Hide", "Left, Right, Center", "Top, Bottom, Middle"],
  "Slide 10: WindowState có các giá trị Normal, Minimized, Maximized."),

S("q12", 6, 2, "Thuộc tính nào của Form quy định vị trí xuất hiện của Form khi chạy (ví dụ: CenterScreen)?",
  ["StartPosition", "Location", "Position", "TopMost"],
  "Slide 10: StartPosition xác định vị trí bắt đầu của form khi chạy (Manual, CenterScreen, WindowsDefaultLocation...)."),

S("q13", 6, 2, "Thuộc tính `FormBorderStyle` của Form có tác dụng gì?",
  ["Thiết lập kiểu đường viền của cửa sổ (None, FixedSingle, Sizable...)", "Thay đổi màu nền của Form", "Gắn icon cho Form", "Thiết lập độ mờ (Opacity) của Form"],
  "Slide 10: FormBorderStyle lấy hoặc thiết lập kiểu đường viền của form."),

S("q14", 6, 3, "Thuộc tính `AcceptButton` của Form có tác dụng gì?",
  ["Xác định nút nào trên Form sẽ được click khi người dùng nhấn phím ENTER", "Xác định nút nào sẽ đóng Form", "Xác định nút nào sẽ được click khi nhấn phím ESC", "Xác định nút mặc định khi Form load"],
  "Slide 10: AcceptButton xác định nút được click khi nhấn phím ENTER. CancelButton dùng cho phím ESC."),

S("q15", 6, 1, "Sự kiện `Load` của Form xảy ra khi nào?",
  ["Xảy ra trước khi Form được hiển thị lần đầu tiên", "Xảy ra sau khi Form đã đóng", "Xảy ra khi người dùng click chuột vào Form", "Xảy ra khi người dùng nhấn phím bất kỳ"],
  "Slide 10: Sự kiện Load xảy ra trước khi form được hiển thị lần đầu tiên."),

S("q16", 6, 2, "Sự kiện `FormClosing` và `FormClosed` khác nhau ở điểm nào?",
  ["FormClosing xảy ra TRƯỚC khi form đóng, FormClosed xảy ra SAU khi form đã đóng", "FormClosing xảy ra SAU khi form đóng, FormClosed xảy ra TRƯỚC khi form đóng", "Cả hai xảy ra cùng lúc", "FormClosed dùng để chặn việc đóng form"],
  "Slide 10: FormClosing occurs before the form is closed. FormClosed occurs after the form is closed."),

M("q17", 6, 2, "Những sự kiện nào sau đây liên quan đến chuột (Mouse) của Form/Control?",
  ["MouseClick", "MouseDown", "MouseEnter", "KeyPress"], 3,
  "Slide 10: Các sự kiện chuột gồm MouseClick, MouseDoubleClick, MouseDown, MouseEnter, MouseHover, MouseLeave, MouseMove, MouseUp, MouseWheel. KeyPress là sự kiện bàn phím."),

S("q18", 6, 2, "Mục đích chính của control `Panel` là gì?",
  ["Tạo các khu vực để nhóm và sắp xếp các control bên trong nó theo ý muốn", "Hiển thị hình ảnh", "Nhập văn bản nhiều dòng", "Chọn ngày tháng"],
  "Slide 10: Panel tạo khu vực để nhóm các control, có thể di chuyển toàn bộ các control bên trong bằng cách kéo Panel."),

S("q19", 6, 2, "Control `FlowLayoutPanel` có đặc điểm gì nổi bật?",
  ["Tự động sắp xếp các control con theo một hướng (FlowDirection) như từ trên xuống, trái sang phải...", "Chia giao diện thành 2 vùng có thể kéo thay đổi kích thước", "Hiển thị dữ liệu dạng cây", "Hiển thị dữ liệu dạng bảng"],
  "Slide 10: FlowLayoutPanel có thuộc tính FlowDirection (TopDown, LeftToRight...) để tự động sắp xếp các control."),

S("q20", 6, 2, "Control `SplitContainer` dùng để làm gì?",
  ["Chia giao diện thành hai vùng (Panel) có thanh trượt ở giữa để người dùng thay đổi kích thước", "Hiển thị một menu các lựa chọn", "Tạo một hộp thoại thông báo", "Hiển thị biểu đồ"],
  "Slide 10: SplitContainer chia giao diện thành 2 Panel, có thuộc tính Orientation (Vertical/Horizontal)."),

S("q21", 6, 1, "Control nào dùng để hiển thị một chuỗi văn bản (không cho người dùng sửa) trên Form?",
  ["Label", "TextBox", "RichTextBox", "Button"],
  "Slide 10: Label được sử dụng để biểu diễn một chuỗi hoặc văn bản trên form."),

S("q22", 6, 2, "Thuộc tính `PasswordChar` của TextBox có tác dụng gì?",
  ["Thay thế các ký tự nhập vào bằng một ký tự khác (ví dụ dấu *) để ẩn mật khẩu", "Giới hạn độ dài mật khẩu", "Mã hóa mật khẩu trước khi lưu", "Tự động điền mật khẩu"],
  "Slide 10: PasswordChar khai báo ký tự thay thế khi nhập mật khẩu."),

S("q23", 6, 2, "Thuộc tính `Multiline` của TextBox có tác dụng gì?",
  ["Cho phép nhập văn bản trên nhiều dòng", "Cho phép nhập nhiều mật khẩu", "Cho phép hiển thị nhiều TextBox cùng lúc", "Cho phép kéo giãn TextBox"],
  "Slide 10: Multiline nếu set bằng true, nội dung trong textbox sẽ được viết trên nhiều dòng."),

S("q24", 6, 1, "Control nào cho phép người dùng chọn NHIỀU lựa chọn cùng lúc?",
  ["CheckBox", "RadioButton", "Label", "TextBox"],
  "Slide 10: Checkbox cho phép chọn nhiều option. RadioButton chỉ cho chọn 1 option."),

S("q25", 6, 2, "Khi thiết kế RadioButton, ta BẮT BUỘC phải kết hợp với control nào để nhóm các RadioButton lại với nhau?",
  ["GroupBox", "Panel", "FlowLayoutPanel", "TabControl"],
  "Slide 10: Must combine with GroupBox to group RadioButtons (required). Nếu không có GroupBox, các RadioButton trên cùng Form sẽ bị gộp thành 1 nhóm và chỉ chọn được 1."),

S("q26", 6, 2, "Control `PictureBox` được sử dụng để làm gì?",
  ["Hiển thị hình ảnh trên giao diện", "Chụp ảnh màn hình", "Vẽ biểu đồ", "Chỉnh sửa ảnh"],
  "Slide 10: PictureBox được sử dụng để hiển thị hình ảnh trên giao diện."),

S("q27", 6, 2, "Thuộc tính `SizeMode` của PictureBox dùng để làm gì?",
  ["Thiết lập chế độ hiển thị hình ảnh (StretchImage, Zoom, CenterImage...)", "Thay đổi kích thước của control", "Đặt ảnh làm nền", "Chọn định dạng ảnh"],
  "Slide 10: SizeMode thiết lập hình dáng, cách hiển thị của ảnh (Image appearance)."),

S("q28", 6, 2, "Control `DateTimePicker` khác gì với `MonthCalendar`?",
  ["DateTimePicker hiển thị ngày dưới dạng textbox có nút thả xuống, MonthCalendar hiển thị toàn bộ lịch tháng", "DateTimePicker chỉ chọn được giờ, MonthCalendar chọn được ngày", "DateTimePicker có giao diện lịch tháng, MonthCalendar chỉ có textbox", "Cả hai hoàn toàn giống nhau"],
  "Slide 10: DateTimePicker hiển thị ngày dạng textbox + dropdown lịch. MonthCalendar hiển thị nguyên một tờ lịch tháng trên form."),

S("q29", 6, 3, "Thuộc tính `Format` của DateTimePicker nhận giá trị `CustomFormat` khi nào?",
  ["Khi muốn hiển thị ngày theo định dạng do người dùng tự định nghĩa", "Khi muốn hiển thị ngày theo chuẩn mặc định của Windows", "Khi muốn ẩn control này đi", "Khi muốn khóa không cho chọn ngày"],
  "Slide 10: CustomFormat cho phép hiển thị ngày theo định dạng của người dùng."),

S("q30", 6, 1, "Control nào cho phép người dùng chọn một hoặc nhiều phần tử từ một danh sách hiển thị sẵn?",
  ["ListBox", "Label", "TextBox", "PictureBox"],
  "Slide 10: ListBox tạo một danh sách cho người dùng chọn."),

S("q31", 6, 2, "Thuộc tính `SelectionMode` của ListBox dùng để làm gì?",
  ["Quy định cách chọn trong danh sách (chỉ chọn một hoặc cho phép chọn nhiều)", "Thay đổi màu sắc của ListBox", "Thêm phần tử vào ListBox", "Sắp xếp các phần tử trong ListBox"],
  "Slide 10: SelectionMode quy định cách chọn (One, MultiSimple, MultiExtended...)."),

S("q32", 6, 2, "Để lấy chỉ số (vị trí) của phần tử đang được chọn trong ListBox, ta dùng thuộc tính nào?",
  ["SelectedIndex", "SelectedItem", "SelectedIndices", "Items.Count"],
  "Slide 10: SelectedIndex trả về chỉ số của phần tử được chọn. SelectedItem trả về giá trị phần tử. SelectedIndices trả về tập các chỉ số (khi chọn nhiều)."),

S("q33", 6, 2, "Để lấy GIÁ TRỊ của phần tử đang được chọn trong ListBox, ta dùng thuộc tính nào?",
  ["SelectedItem", "SelectedIndex", "Items.Count", "Text"],
  "Slide 10: SelectedItem trả về phần tử được chọn (giá trị). SelectedIndex trả về vị trí."),

S("q34", 6, 2, "Thuộc tính `Items.Count` của ListBox dùng để làm gì?",
  ["Trả về số lượng phần tử trong ListBox", "Đếm số phần tử đang được chọn", "Đếm số ký tự trong phần tử đang chọn", "Đếm số ListBox trên Form"],
  "Slide 10: Items.Count trả về số lượng phần tử trong Listbox."),

M("q35", 6, 2, "Những phương thức nào sau đây dùng để thêm phần tử vào ListBox?",
  ["Add", "AddRange", "Insert", "Remove"], 3,
  "Slide 10: Thêm phần tử dùng Add, AddRange, Insert. Remove/RemoveAt/Clear dùng để xóa."),

S("q36", 6, 3, "Cho đoạn code sau:\n`listBox1.Items.Clear();`\n`for (int i = 0; i < 10; i++) listBox1.Items.Add(\"Item \" + i);`\nĐoạn code này thực hiện công việc gì?",
  ["Xóa toàn bộ phần tử cũ và thêm 10 phần tử mới từ Item 0 đến Item 9 vào ListBox", "Thêm 10 phần tử vào sau các phần tử cũ", "Xóa 10 phần tử đầu tiên của ListBox", "Đếm số phần tử trong ListBox"],
  "Slide 10 (Code Demo): Đoạn code trong sự kiện Load thực hiện xóa rỗng ListBox và thêm 10 phần tử."),

S("q37", 6, 2, "Control `ComboBox` khác `ListBox` ở điểm cơ bản nào?",
  ["ComboBox hiển thị dạng danh sách thả xuống và KHÔNG hỗ trợ chọn nhiều phần tử", "ComboBox hỗ trợ chọn nhiều phần tử, ListBox thì không", "ComboBox không có thuộc tính SelectedItem", "ComboBox không thể thêm phần tử bằng code"],
  "Slide 10: Combobox cung cấp danh sách lựa chọn như ListBox nhưng khác ở cách hiển thị (thả xuống) và không hỗ trợ chọn nhiều."),

S("q38", 6, 2, "Control nào cho phép hiển thị văn bản có định dạng (in đậm, in nghiêng, màu sắc khác nhau) ngay trên giao diện?",
  ["RichTextBox", "TextBox", "Label", "ListBox"],
  "Slide 10: RichTextBox cho phép hiển thị văn bản có định dạng (như hình minh họa đoạn văn Text Mining được in đậm)."),

S("q39", 6, 2, "Control `ListView` được sử dụng để làm gì?",
  ["Hiển thị dữ liệu dưới dạng lưới (có dòng, cột)", "Hiển thị dữ liệu dạng cây phân cấp", "Hiển thị biểu đồ", "Hiển thị hình ảnh"],
  "Slide 10: ListView là control dùng để hiển thị dữ liệu dưới dạng lưới (grid)."),

S("q40", 6, 3, "Để tạo các cột cho ListView, ta sử dụng thuộc tính nào?",
  ["Columns", "Rows", "Items", "SubItems"],
  "Slide 10: Thuộc tính Columns để tạo các cột cho ListView."),

S("q41", 6, 3, "Đoạn code sau thực hiện việc gì?\n`ListViewItem lvi = new ListViewItem(\"1\");`\n`lvi.SubItems.Add(\"9999\");`\n`lvi.SubItems.Add(\"Blade\");`\n`listView1.Items.Add(lvi);`",
  ["Thêm một dòng mới có 3 cột (1, 9999, Blade) vào ListView", "Xóa dòng đầu tiên của ListView", "Chỉnh sửa dòng đầu tiên của ListView", "Đếm số dòng trong ListView"],
  "Slide 10: Đoạn code thêm dữ liệu vào ListView. `SubItems.Add` thêm dữ liệu cho các cột tiếp theo."),

S("q42", 6, 3, "Đoạn code sau thực hiện việc gì?\n`listView1.Items.RemoveAt(2);`",
  ["Xóa dòng có vị trí (index) là 2 trong ListView", "Xóa 2 dòng đầu tiên của ListView", "Xóa toàn bộ ListView", "Thêm dòng mới vào vị trí số 2"],
  "Slide 10: RemoveAt(index) xóa phần tử tại vị trí index. Remove(lvi) xóa theo đối tượng."),

S("q43", 6, 2, "Control `DataGridView` có tính năng đặc biệt nào mà `ListView` không có (theo slide)?",
  ["Có thể hiển thị dữ liệu trực tiếp từ kết nối cơ sở dữ liệu (DataSource)", "Hiển thị được hình ảnh trong ô", "Hỗ trợ sắp xếp theo cột", "Hỗ trợ chọn nhiều dòng"],
  "Slide 10: Đặc điểm đặc biệt của DataGridView là có thể hiển thị dữ liệu từ kết nối database, hoặc từ List object."),

S("q44", 6, 3, "Đoạn code sau thực hiện việc gì?\n`List<Product> products = new List<Product>();`\n`products.Add(new Product { Barcode = \"111-222\", Name = \"Coca\", Price = 25000 });`\n`dataGridView1.DataSource = products;`",
  ["Gán danh sách sản phẩm (List) làm nguồn dữ liệu cho DataGridView để hiển thị lên bảng", "Xóa dữ liệu trong DataGridView", "Thêm một cột mới vào DataGridView", "Kết nối DataGridView tới SQL Server"],
  "Slide 10: Đoạn code gán `DataSource = products` để hiển thị danh sách đối tượng lên DataGridView."),

S("q45", 6, 2, "Control `TreeView` được sử dụng để làm gì?",
  ["Hiển thị dữ liệu dưới dạng cây thư mục phân cấp (cha - con)", "Hiển thị dữ liệu dạng bảng", "Hiển thị danh sách phẳng", "Hiển thị biểu đồ"],
  "Slide 10: TreeView là control dùng để hiển thị dữ liệu dưới dạng cây thư mục, tính trực quan hóa dữ liệu rất cao."),

S("q46", 6, 3, "Để thêm một Node gốc (Root Node) vào TreeView bằng code, ta viết như thế nào?",
  ["`tvSample.Nodes.Add(rootNode);`", "`tvSample.Items.Add(rootNode);`", "`tvSample.Root.Add(rootNode);`", "`tvSample.Nodes.Insert(rootNode);`"],
  "Slide 10: Để thêm node gốc, dùng `tvSample.Nodes.Add(rootNode)`. Các node con thêm vào `rootNode.Nodes.Add(childNode)`."),

S("q47", 6, 3, "Để lấy Node đang được chọn trong TreeView, ta dùng thuộc tính nào?",
  ["SelectedNode", "SelectedItem", "SelectedIndex", "CurrentNode"],
  "Slide 10: `TreeNode tNode = tvSample.SelectedNode;` dùng để lấy node đang chọn."),

S("q48", 6, 3, "Để xóa một Node đang được chọn khỏi TreeView, ta viết lệnh như thế nào?",
  ["`tvSample.Nodes.Remove(tvSample.SelectedNode);`", "`tvSample.Nodes.Clear();`", "`tvSample.Items.RemoveAt(index);`", "`tvSample.Nodes.Delete();`"],
  "Slide 10: `TreeNode tNode = tvSample.SelectedNode; tvSample.Nodes.Remove(tNode);` để xóa node đang chọn."),

S("q49", 6, 2, "Control `Chart` trong Windows Forms dùng để làm gì?",
  ["Vẽ và hiển thị các loại biểu đồ (cột, đường, tròn...)", "Hiển thị dữ liệu dạng lưới", "Hiển thị cây thư mục", "Hiển thị hình ảnh"],
  "Slide 10: Chart dùng để vẽ biểu đồ. Ví dụ: `chart1.Series[0].ChartType = SeriesChartType.Bar;`"),

S("q50", 6, 3, "Để thiết lập loại biểu đồ là dạng cột (Bar) trong control Chart, ta dùng thuộc tính nào?",
  ["`ChartType`", "`SeriesType`", "`ChartStyle`", "`Type`"],
  "Slide 10: `chart1.Series[0].ChartType = SeriesChartType.Bar;` thiết lập loại biểu đồ."),

S("q51", 6, 3, "Để hiển thị giá trị số liệu ngay trên đầu mỗi cột trong biểu đồ Chart, ta set thuộc tính nào bằng `true`?",
  ["`IsValueShownAsLabel`", "`ShowValue`", "`DisplayValue`", "`LabelValue`"],
  "Slide 10: `chart1.Series[0].IsValueShownAsLabel = true;` để hiển thị số liệu trên cột."),

S("q52", 6, 3, "Để gán dữ liệu cho biểu đồ Chart với trục X là mảng `Quaters` và trục Y là mảng `Y`, ta dùng phương thức nào?",
  ["`chart1.Series[0].Points.DataBindXY(Quaters, Y);`", "`chart1.Series[0].Data = (Quaters, Y);`", "`chart1.DataBind(Quaters, Y);`", "`chart1.Series[0].SetData(Quaters, Y);`"],
  "Slide 10: `DataBindXY` là phương thức dùng để gán dữ liệu cho các điểm (Points) của Series trong Chart."),
];
module.exports = QUESTIONS_C6;