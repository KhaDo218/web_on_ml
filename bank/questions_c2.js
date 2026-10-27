// ============================================================================
// CHƯƠNG 2: Dữ liệu (MLBA)
// Nguồn: Slide 04 - Dữ liệu
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// C(code) tạo khối code nhiều dòng.
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c2-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c2-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });
const C = (code) => "\n```\n" + code + "\n```\n";

const QUESTIONS_C2 = [
// ================= 2.1 DỮ LIỆU LÀ GÌ =================
S("q1", 2, 1, "Câu nói nào thể hiện giá trị của dữ liệu đối với doanh nghiệp?",
  ["Dữ liệu là vàng", "Dữ liệu là rác", "Dữ liệu là chi phí", "Dữ liệu là phần cứng"],
  "Dữ liệu là vàng: biết cách khai thác sẽ thu được nhiều thông tin có ý nghĩa."),

S("q34", 2, 1, "Theo cách hiểu rộng, thứ gì được gọi là dữ liệu?",
  ["Bất kể những gì có thể chuyển hóa thành thông tin có ý nghĩa", "Chỉ những con số lưu trong bảng tính", "Chỉ những văn bản có chữ ký", "Chỉ những gì đã được in ra giấy"],
  "Một cách hiểu khác: bất kể thứ gì lưu trong máy tính mà phần mềm đọc, xử lý và mô hình hóa hướng đối tượng được đều là dữ liệu."),

S("q5", 2, 1, "Định nghĩa nào mô tả đúng về dữ liệu?",
  ["Tập hợp thông tin gồm số, chữ cái, hình ảnh, bảng biểu... giúp con người hình dung ra sự vật, sự việc", "Chỉ là các con số lưu trong máy tính", "Là quyết định đã được đưa ra", "Là một loại phần mềm quản lý"],
  "Dữ liệu được đo lường, thu thập, báo cáo, phân tích rồi hiển thị dưới dạng đồ thị, bảng hoặc hình ảnh."),

S("q35", 2, 2, "Thứ tự đúng của dữ liệu trước khi được hiển thị dưới dạng đồ thị, bảng hoặc hình ảnh là gì?",
  ["Được đo lường, thu thập, báo cáo và phân tích", "Được hiển thị rồi mới thu thập", "Được xóa bớt rồi mới đo lường", "Được mã hóa rồi gửi đi ngay"],
  "Dữ liệu là thông tin/kiến thức đã được biểu diễn hoặc mã hóa để sử dụng, xử lý tốt hơn."),

S("q2", 2, 2, "Trong mô hình DIKW, dữ liệu thô (Raw) sau khi được xử lý (Processed) trở thành gì?",
  ["Information (Thông tin)", "Knowledge (Tri thức)", "Decision-making (Ra quyết định)", "Wisdom (Trí tuệ)"],
  "DATA (Raw) -> INFORMATION (Processed) -> KNOWLEDGE (Actionable) -> Decision-making."),

S("q3", 2, 2, "Trong mô hình DIKW, Knowledge (Tri thức) có đặc trưng nào?",
  ["Actionable (có thể hành động)", "Raw (thô)", "Processed (đã xử lý)", "Random (ngẫu nhiên)"],
  "DATA là Raw, INFORMATION là Processed, KNOWLEDGE là Actionable."),

S("q4", 2, 3, "Trong chuỗi Dữ liệu -> Thông tin -> Tri thức -> Ra quyết định, vòng lặp quay lại sau bước ra quyết định mang ý nghĩa gì?",
  ["Tính thích ứng (Adaptive): tiếp tục thu thập dữ liệu mới để ra quyết định tốt hơn", "Hệ thống bị lỗi và phải làm lại từ đầu", "Xóa dữ liệu cũ để lưu dữ liệu mới", "Không có ý nghĩa gì"],
  "Quy trình là vòng lặp khép kín: quyết định tạo ra dữ liệu mới, dữ liệu mới tạo thông tin và tri thức mới."),

// ================= 2.2 TẦM QUAN TRỌNG CỦA DỮ LIỆU =================
M("q6", 2, 2, "Tầm quan trọng của dữ liệu đối với doanh nghiệp gồm những nội dung nào?",
  ["Giúp đưa ra quyết định tốt hơn", "Giúp nắm bắt và nâng cao hiệu suất", "Giúp hiểu sâu người tiêu dùng và cải thiện quy trình", "Giúp thay thế hoàn toàn ban lãnh đạo công ty"], 3,
  "Tám vai trò: quyết định tốt hơn, nâng cao hiệu suất, hiểu sâu người tiêu dùng, cải thiện quy trình, phát hiện cơ hội/thách thức, nguồn tin cốt lõi cho nghiên cứu, đem lại doanh thu, giải quyết vấn đề."),

M("q7", 2, 2, "Dữ liệu giúp doanh nghiệp đưa ra quyết định tốt hơn qua những việc nào?",
  ["Tìm kiếm khách hàng mới dựa trên nhân khẩu học, hành vi và sở thích", "Tăng tỷ lệ quay trở lại mua hàng và cải thiện dịch vụ khách hàng", "Quản lý tốt hơn hoạt động marketing, dự đoán xu hướng bán hàng, dịch vụ, tiếp thị", "Loại bỏ nhu cầu đánh giá chiến dịch"], 3,
  "Dữ liệu từ website, mua bán online, mạng xã hội liên quan đến thông tin khách hàng, thói quen, lưu lượng truy cập, nhân khẩu học."),

S("q36", 2, 1, "Câu hỏi 'Các phòng ban trong doanh nghiệp đang hoạt động như thế nào?' được trả lời nhờ vai trò nào của dữ liệu?",
  ["Giúp doanh nghiệp nắm bắt và nâng cao hiệu suất", "Giúp hiểu sâu người tiêu dùng", "Nguồn tin cốt lõi cho nghiên cứu", "Đem lại doanh thu"],
  "Thu thập và phân tích dữ liệu cho thấy toàn bộ doanh nghiệp đang hoạt động với hiệu suất ra sao."),

S("q37", 2, 1, "Dữ liệu trả lời các câu hỏi 'Khách hàng là ai? Họ có thích sản phẩm không? Họ sẽ chi bao nhiêu tiền?' thể hiện vai trò nào?",
  ["Giúp doanh nghiệp hiểu sâu người tiêu dùng", "Giúp cải thiện quy trình", "Giúp nâng cao hiệu suất phòng ban", "Giúp giải quyết sự cố kỹ thuật"],
  "Dữ liệu là chìa khóa để hiểu khách hàng và thị trường."),

S("q8", 2, 2, "Dữ liệu giúp cải thiện quy trình như thế nào?",
  ["Dữ liệu khách hàng được chia sẻ với mọi phòng ban giúp nhân viên bán hàng nắm rõ nhu cầu, không mất thời gian tìm hiểu lại và tập trung tư vấn", "Buộc nhân viên làm việc nhiều giờ hơn", "Tự động sa thải nhân viên yếu kém", "Tăng giá sản phẩm để bù chi phí"],
  "Quy trình cồng kềnh khiến doanh nghiệp tốn thời gian và chi phí."),

M("q38", 2, 3, "Những thách thức nào dữ liệu đặt ra cho chúng ta?",
  ["Thu thập, lưu trữ, xử lý, phân tích, trực quan hóa dữ liệu nhanh, chính xác, an toàn", "Bảo vệ quyền riêng tư, an ninh và đạo đức của người dùng, người sở hữu dữ liệu", "Tận dụng tối đa giá trị dữ liệu mà không gây hậu quả tiêu cực cho xã hội và môi trường", "Dữ liệu không thể giúp tìm giải pháp sáng tạo"], 3,
  "Đây là nội dung của vai trò 'Phát hiện cơ hội, thách thức trong tương lai'."),

S("q39", 2, 2, "Vì sao dữ liệu là nguồn tin cốt lõi để thực hiện nghiên cứu?",
  ["Không có dữ liệu thì không thể kiểm tra giả thuyết, phát triển mô hình hay rút ra kết luận", "Vì dữ liệu luôn chính xác tuyệt đối", "Vì nghiên cứu chỉ cần ý kiến chuyên gia", "Vì dữ liệu thay thế được phương pháp nghiên cứu"],
  "Dữ liệu cung cấp bằng chứng cần thiết để hỗ trợ quyết định và hành động."),

S("q9", 2, 2, "Dữ liệu đem lại doanh thu cho doanh nghiệp bằng cách nào?",
  ["Giúp hiểu rõ khách hàng, thị trường, đối thủ, sản phẩm; tìm cơ hội kinh doanh mới, tối ưu chi phí và lợi nhuận", "Bán dữ liệu khách hàng cho đối thủ", "Tự động tăng giá sản phẩm", "Cắt giảm nhân viên"],
  "Dữ liệu còn giúp cải thiện chất lượng sản phẩm, xây dựng quan hệ khách hàng bền vững."),

S("q40", 2, 2, "Sau khi kết thúc một chiến dịch marketing, doanh nghiệp xem xét dữ liệu từ các quy trình kinh doanh để phát hiện sự cố hiệu suất. Đây là vai trò nào của dữ liệu?",
  ["Giúp giải quyết nhiều vấn đề gặp phải", "Nguồn tin cốt lõi cho nghiên cứu", "Hiểu sâu người tiêu dùng", "Cải thiện quy trình chia sẻ thông tin"],
  "Dữ liệu cung cấp thông tin chuyên sâu về nguyên nhân, tình trạng, giải pháp; giúp dự đoán, phòng ngừa vấn đề và đánh giá hiệu quả biện pháp."),

// ================= 2.3 GARBAGE IN - GARBAGE OUT =================
S("q10", 2, 1, "Nguyên tắc 'Garbage In - Garbage Out' (GIGO) có nghĩa là gì?",
  ["Đầu vào bị lỗi, thiên lệch hoặc chất lượng kém sẽ tạo ra kết quả đầu ra tương tự", "Rác đầu vào sẽ được tái chế thành dữ liệu tốt", "Hệ thống tự động dọn rác", "Dữ liệu rác không thể tồn tại trong máy tính"],
  "GIGO nhấn mạnh nhu cầu cải thiện chất lượng dữ liệu đầu vào."),

S("q11", 2, 1, "Một mô hình máy học rất tốt (Great Model) nhưng được huấn luyện bằng dữ liệu rác (Garbage Data) thì kết quả thế nào?",
  ["Kết quả cũng là rác (Garbage Results)", "Mô hình tự sửa lỗi và cho kết quả chính xác", "Hệ thống bị treo", "Mô hình tự lọc bỏ dữ liệu rác"],
  "Mô hình tốt không cứu được dữ liệu kém chất lượng."),

S("q41", 2, 1, "Cách diễn đạt thay thế của 'Garbage In, Garbage Out' là gì?",
  ["Rubbish In, Rubbish Out (RIRO)", "First In, First Out (FIFO)", "Last In, First Out (LIFO)", "Data In, Data Out (DIDO)"],
  "RIRO là cách nói khác của GIGO."),

// ================= 2.4 CÁC LOẠI DỮ LIỆU =================
S("q42", 2, 1, "Ba loại dữ liệu thường gặp là gì?",
  ["Có cấu trúc, phi cấu trúc, bán cấu trúc", "Số, chữ, hình ảnh", "Nội bộ, bên ngoài, đám mây", "Tĩnh, động, ngẫu nhiên"],
  "Structured, Unstructured, Semi-structured."),

S("q12", 2, 1, "Dữ liệu có cấu trúc được quản lý bằng ngôn ngữ nào?",
  ["SQL (Structured Query Language) với công cụ như MySQL, Microsoft SQL Server", "HTML", "Markdown", "Ngôn ngữ tự nhiên"],
  "Dữ liệu có cấu trúc nằm trong hàng, cột; các thành phần liên kết bằng các trường định sẵn."),

S("q43", 2, 1, "Vì sao dữ liệu có cấu trúc dễ tìm kiếm và sắp xếp nhất?",
  ["Vì được chứa trong các hàng, cột và liên kết bằng các trường định sẵn", "Vì có dung lượng lớn nhất", "Vì luôn là hình ảnh", "Vì không cần lưu trữ"],
  "Đây là đặc trưng của dữ liệu có cấu trúc."),

S("q13", 2, 2, "Theo ước tính của Gartner, tỷ lệ dữ liệu có cấu trúc và phi cấu trúc trong dữ liệu doanh nghiệp là bao nhiêu?",
  ["Có cấu trúc khoảng 20%, phi cấu trúc khoảng 80%", "Có cấu trúc khoảng 80%, phi cấu trúc khoảng 20%", "Mỗi loại 50%", "Có cấu trúc 10%, phi cấu trúc 90%"],
  "Phần lớn dữ liệu trên thế giới là phi cấu trúc."),

M("q14", 2, 2, "Đặc điểm nào thuộc về dữ liệu phi cấu trúc?",
  ["Không thể hiển thị trong hàng, cột và CSDL quan hệ", "Ví dụ: hình ảnh, âm thanh, video, file văn bản, email", "Cần nhiều không gian lưu trữ hơn, khó quản lý và bảo vệ hơn", "Dễ tìm kiếm và quản lý hơn dữ liệu có cấu trúc"], 3,
  "Thiếu cấu trúc khiến dữ liệu phi cấu trúc khó tìm kiếm, quản lý và phân tích."),

M("q44", 2, 2, "Đặc điểm nào thuộc về dữ liệu có cấu trúc?",
  ["Hiển thị được trong hàng, cột và CSDL quan hệ", "Gồm số, ngày tháng và chuỗi", "Cần ít không gian lưu trữ, dễ quản lý và bảo vệ bằng giải pháp truyền thống", "Chiếm khoảng 80% dữ liệu doanh nghiệp"], 3,
  "Dữ liệu có cấu trúc chiếm khoảng 20%."),

M("q45", 2, 2, "Nguồn nào sau đây chủ yếu tạo ra dữ liệu phi cấu trúc?",
  ["Chat, email, mạng xã hội", "Ghi âm cuộc gọi tổng đài (call center, voice transcriptions)", "Ghi chú, khảo sát, đánh giá và xếp hạng (ratings & reviews)", "Bảng dữ liệu CRM, Sales, Finance"], 3,
  "Các hệ thống CRM, Sales, Finance, Excel, NPS/CSAT là nguồn dữ liệu có cấu trúc."),

S("q46", 2, 2, "Dữ liệu bán cấu trúc có đặc điểm gì?",
  ["Pha trộn giữa có cấu trúc và phi cấu trúc: có một số tính chất đồng nhất, có nhãn ngữ nghĩa hoặc metadata, nhưng không khớp với CSDL quan hệ", "Luôn nằm trong bảng có khóa chính", "Hoàn toàn không có thuộc tính nào", "Chỉ gồm các con số"],
  "Các semantic tag hay metadata giúp dễ sắp xếp hơn nhưng vẫn có lỗ hổng."),

S("q15", 2, 2, "Vì sao email được xếp vào dữ liệu bán cấu trúc?",
  ["Nội dung email là phi cấu trúc, nhưng tên, địa chỉ người gửi, người nhận và thời gian gửi là dữ liệu có cấu trúc", "Vì email luôn có định dạng HTML", "Vì email được lưu trong CSDL quan hệ", "Vì email chỉ chứa văn bản thuần"],
  "Email là ví dụ điển hình của dữ liệu bán cấu trúc."),

S("q47", 2, 2, "Loại cơ sở dữ liệu nào lưu dữ liệu dưới dạng document (ví dụ MongoDB, Couchbase)?",
  ["Document Database", "Graph Database", "Time-Series Database", "Columnar Database"],
  "Ngoài SQL còn có các loại: Key-Value, Document, Graph, Time-Series, Vector, In-Memory, Columnar, Spatial, Object-Oriented, NewSQL, Blockchain..."),

S("q16", 2, 1, "Câu lệnh pandas nào đọc file `SalesTransactions.csv`?",
  ["pd.read_csv(\"dataset/SalesTransactions.csv\")", "pd.read_excel(\"dataset/SalesTransactions.csv\")", "pd.open_csv(\"dataset/SalesTransactions.csv\")", "pd.load(\"dataset/SalesTransactions.csv\")"],
  "Có thể truyền thêm `encoding='utf-8', dtype='unicode', low_memory=False`."),

S("q17", 2, 2, "File `SalesTransactions.txt` có các cột phân tách bằng ký tự Tab. Lệnh đọc nào đúng?" + C(`df = pd.read_csv("dataset/SalesTransactions.txt",
                 encoding='utf-8', dtype='unicode',
                 ______,
                 low_memory=False)`),
  ["sep='\\t'", "sep=' '", "sep=','", "format='tab'"],
  "File txt vẫn đọc bằng `read_csv`, chỉ cần chỉ định ký tự phân tách `sep='\\t'`."),

S("q48", 2, 2, "Trong lệnh `pd.read_csv(\"dataset/SalesTransactions.csv\", encoding='utf-8', dtype='unicode', low_memory=False)`, tham số `dtype='unicode'` có tác dụng gì?",
  ["Đọc mọi cột dưới dạng chuỗi (unicode) thay vì để pandas tự suy kiểu", "Mã hóa file thành unicode khi lưu", "Chỉ đọc các cột chứa chữ", "Bỏ qua các ký tự tiếng Việt"],
  "`encoding='utf-8'` chỉ bảng mã của file; `low_memory=False` đọc toàn bộ file một lần để suy kiểu nhất quán."),

S("q18", 2, 1, "Câu lệnh pandas nào đọc file JSON?",
  ["pd.read_json(\"dataset/SalesTransactions.json\", encoding='utf-8', dtype='unicode')", "pd.read_csv(\"dataset/SalesTransactions.json\", sep='json')", "pd.json(\"dataset/SalesTransactions.json\")", "pd.read_xml(\"dataset/SalesTransactions.json\")"],
  "Hàm `read_json` đọc file JSON vào DataFrame."),

M("q49", 2, 2, "Để đọc file XML bằng BeautifulSoup, cần cài đặt những thư viện nào?",
  ["pip install beautifulsoup4", "pip install lxml", "pip install xlrd", "pip install mysql-connector-python"], 2,
  "beautifulsoup4 là thư viện phân tích; lxml là parser XML. xlrd dùng cho Excel."),

S("q19", 2, 2, "Đoạn code sau làm gì?" + C(`from bs4 import BeautifulSoup
with open('dataset/SalesTransactions.xml', 'r') as f:
    data = f.read()
bs_data = BeautifulSoup(data, 'xml')
UelSample = bs_data.find_all('UelSample')
print(UelSample)`),
  ["Đọc nội dung file XML, phân tích bằng parser 'xml' rồi tìm mọi thẻ <UelSample>", "Ghi dữ liệu XML ra file mới", "Chuyển file XML sang CSV", "Xóa thẻ UelSample khỏi file"],
  "`find_all(tag)` trả về danh sách mọi phần tử có tên thẻ tương ứng."),

S("q50", 2, 2, "Trong BeautifulSoup, phương thức nào trả về tất cả các phần tử có tên thẻ cho trước?",
  ["find_all('TênThẻ')", "find('TênThẻ')", "select_one('TênThẻ')", "get('TênThẻ')"],
  "`find` chỉ trả về phần tử đầu tiên tìm thấy."),

S("q20", 2, 2, "Thư viện nào cần cài để đọc XML bằng cú pháp `import pandas_read_xml as pdx`?",
  ["pandas-read-xml", "pandas-xml-reader", "xlrd", "beautifulsoup4"],
  "Cài bằng `pip install pandas-read-xml`."),

S("q51", 2, 3, "File XML có cấu trúc `<UelSample><SalesItem>...</SalesItem>...</UelSample>`. Lệnh nào đọc được danh sách SalesItem vào DataFrame?",
  ["df = pdx.read_xml(\"dataset/SalesTransactions.xml\", ['UelSample', 'SalesItem'])", "df = pdx.read_xml(\"dataset/SalesTransactions.xml\", 'SalesItem/UelSample')", "df = pdx.read_csv(\"dataset/SalesTransactions.xml\")", "df = pdx.parse(['UelSample', 'SalesItem'])"],
  "Tham số thứ hai là danh sách đường dẫn thẻ từ gốc đến phần tử lặp lại."),

S("q52", 2, 3, "Sau khi đọc XML bằng `df = pdx.read_xml(..., ['UelSample', 'SalesItem'])`, mỗi dòng là một dict SalesItem. Đoạn code sau in ra gì ở dòng cuối?" + C(`data = df.iloc[0]
print(data[1])          # {'OrderID': '10248', 'ProductID': '42', ...}
print(data[1]["OrderID"])`),
  ["10248", "42", "{'OrderID': '10248'}", "Lỗi KeyError"],
  "data[1] là dict của SalesItem thứ hai; truy xuất khóa \"OrderID\" cho '10248'."),

S("q53", 2, 2, "Trong pandas, `df.iloc[0]` dùng để làm gì?",
  ["Lấy dòng (hoặc phần tử) tại vị trí chỉ số 0", "Lấy cột có tên '0'", "Xóa dòng đầu tiên", "Đếm số dòng"],
  "`iloc` truy xuất theo vị trí số nguyên."),

S("q21", 2, 1, "Câu lệnh pandas nào đọc file Excel `SalesTransactions.xlsx`?",
  ["pd.read_excel(\"dataset/SalesTransactions.xlsx\")", "pd.read_csv(\"dataset/SalesTransactions.xlsx\")", "pd.read_xls(\"dataset/SalesTransactions.xlsx\")", "pd.open_excel(\"dataset/SalesTransactions.xlsx\")"],
  "Có thể cần cài thêm engine đọc Excel (ví dụ `pip install xlrd`)."),

S("q54", 2, 1, "Lệnh cài đặt nào được dùng để hỗ trợ đọc dữ liệu Excel?",
  ["pip install xlrd", "pip install lxml", "pip install pandas-read-xml", "pip install sqlite3"],
  "xlrd là thư viện đọc file Excel."),

S("q55", 2, 2, "Khi in DataFrame đọc từ file giao dịch, dòng cuối hiển thị `[2155 rows x 5 columns]`. Thông tin này nghĩa là gì?",
  ["DataFrame có 2155 dòng và 5 cột (OrderID, ProductID, UnitPrice, Quantity, Discount)", "DataFrame có 5 dòng và 2155 cột", "Chỉ 5 dòng đầu được đọc", "File bị lỗi 2155 dòng"],
  "pandas rút gọn phần hiển thị bằng dấu ... và in kích thước ở cuối."),

S("q22", 2, 3, "DataFrame `df` có các cột OrderID, UnitPrice, Quantity, Discount (mỗi dòng là một sản phẩm trong đơn). Lệnh nào tính tổng giá trị của TỪNG đơn hàng?",
  ["df.groupby('OrderID').apply(lambda x: (x['UnitPrice'] * x['Quantity'] * (1 - x['Discount'])).sum())", "df.sum()", "df['OrderID'].sum()", "df.drop_duplicates('OrderID')"],
  "Nhóm theo OrderID, rồi với mỗi nhóm tính tổng UnitPrice * Quantity * (1 - Discount)."),

S("q56", 2, 3, "Biết `order_totals` là Series tổng giá trị theo OrderID. Lệnh nào lọc các đơn có tổng nằm trong [minValue, maxValue]?",
  ["order_totals[(order_totals >= minValue) & (order_totals <= maxValue)]", "order_totals[(order_totals >= minValue) and (order_totals <= maxValue)]", "order_totals.filter(minValue, maxValue)", "order_totals[minValue:maxValue]"],
  "Lọc điều kiện trên Series dùng toán tử `&` và đặt mỗi điều kiện trong ngoặc; `and` gây lỗi."),

S("q57", 2, 3, "Đoạn code sau trả về gì?" + C(`unique_orders = df[df['OrderID'].isin(orders_within_range.index)]['OrderID'].drop_duplicates().tolist()`),
  ["Danh sách (list) các mã đơn hàng không trùng nhau nằm trong orders_within_range", "DataFrame đầy đủ các dòng thỏa điều kiện", "Tổng giá trị các đơn hàng", "Số lượng đơn hàng"],
  "`isin` lọc dòng có OrderID nằm trong index; `drop_duplicates` bỏ trùng; `tolist` chuyển thành list."),

S("q58", 2, 2, "Muốn sắp xếp Series `order_totals` theo tổng giá trị giảm dần (SortType=True), lệnh nào phù hợp?",
  ["order_totals.sort_values(ascending=False)", "order_totals.sort_values(ascending=True)", "order_totals.sort_index()", "order_totals.reverse()"],
  "`ascending=False` sắp giảm dần; True là tăng dần."),

S("q59", 2, 1, "Lệnh `minValue = float(input(\"Nhập giá trị min: \"))` có tác dụng gì?",
  ["Nhận chuỗi người dùng nhập từ bàn phím và chuyển sang số thực", "In ra giá trị min", "Tạo biến kiểu chuỗi", "Đọc giá trị min từ file CSV"],
  "`input()` luôn trả về chuỗi nên phải ép kiểu."),

// ================= 2.5 DỮ LIỆU TRONG VÀ NGOÀI HỆ THỐNG =================
S("q60", 2, 1, "Khi dữ liệu đã có sẵn trong hệ thống, ý tưởng máy học hình thành như thế nào?",
  ["Ý tưởng máy học dựa trên dữ liệu đã được thiết kế, cấu trúc trước", "Phải giả lập toàn bộ dữ liệu", "Phải chờ hệ thống vận hành thêm vài năm", "Không thể áp dụng máy học"],
  "Ngược lại, khi chưa có dữ liệu thì có ý tưởng trước rồi giả lập hoặc dùng dữ liệu ngoài."),

S("q23", 2, 2, "Đã có ý tưởng máy học nhưng hệ thống CHƯA có dữ liệu. Cách làm hợp lý nhất là gì?",
  ["Giả lập dữ liệu hoặc dùng dữ liệu ngoài hệ thống; khi vận hành, thiết kế dữ liệu tương thích với dữ liệu đó", "Chờ đến khi hệ thống có dữ liệu mới bắt đầu", "Từ bỏ ý tưởng", "Dùng bất kỳ dữ liệu nào dù không phù hợp"],
  "Không thể chờ hệ thống có dữ liệu; cần tiên đoán trước dữ liệu để rút ngắn thời gian xây dựng mô hình."),

S("q24", 2, 1, "Nền tảng nào là nguồn dữ liệu mẫu quen thuộc với nhà phân tích dữ liệu và máy học?",
  ["Kaggle", "Google Drive", "Dropbox", "Canva"],
  "Kaggle Datasets có hầu hết các loại dữ liệu mẫu."),

S("q61", 2, 2, "Muốn có dữ liệu thử nghiệm về nhà ở (Housing), có thể tải từ nguồn nào?",
  ["Zillow Research Data", "SQLite Browser", "MongoDB Compass", "MySQL Workbench"],
  "Ngoài ra có thể thu thập dữ liệu trên các sàn thương mại điện tử Việt Nam."),

// ================= 2.6 THIẾT KẾ CSDL =================
S("q25", 2, 2, "CSDL cửa hàng online gồm các bảng Products, Orders, OrderDetails, Customers, Categories, Employees. Bảng nào lưu ProductID, UnitPrice, Quantity, Discount của từng sản phẩm trong đơn hàng?",
  ["OrderDetails", "Products", "Orders", "Customers"],
  "OrderDetails có khóa (OrderID, ProductID) nối Orders với Products."),

S("q62", 2, 2, "Trong CSDL cửa hàng online, bảng Orders liên kết với khách hàng và nhân viên thông qua các cột nào?",
  ["CustomerID và EmployeeID", "ProductID và CategoryID", "UnitPrice và Quantity", "UserName và Password"],
  "Orders gồm OrderID, CustomerID, EmployeeID."),

M("q63", 2, 1, "Những hệ quản trị CSDL nào được dùng để minh họa thiết kế CSDL cửa hàng online?",
  ["SQL Server", "SQLite", "MySQL", "MongoDB"], 4,
  "Công cụ đi kèm: SQL Server Management, DB Browser for SQLite, MySQL Workbench, MongoDB Compass."),

S("q64", 2, 1, "Công cụ có giao diện đồ họa nào dùng để mở và xem cấu trúc file CSDL SQLite?",
  ["DB Browser for SQLite", "MongoDB Compass", "MySQL Workbench", "Power BI"],
  "Tải tại sqlitebrowser.org."),

S("q26", 2, 1, "Module có sẵn nào của Python dùng để tương tác với CSDL SQLite?",
  ["sqlite3", "sqlite", "pysqlite-db", "mysql.connector"],
  "Ví dụ `sqliteConnection = sqlite3.connect('databases/Chinook_Sqlite.sqlite')`."),

S("q65", 2, 2, "Lệnh nào mở kết nối tới file CSDL SQLite `Chinook_Sqlite.sqlite`?",
  ["sqlite3.connect('databases/Chinook_Sqlite.sqlite')", "sqlite3.open('databases/Chinook_Sqlite.sqlite')", "sqlite3.Connection.create('databases/Chinook_Sqlite.sqlite')", "pd.read_sqlite('databases/Chinook_Sqlite.sqlite')"],
  "Sau đó tạo con trỏ bằng `cursor = sqliteConnection.cursor()`."),

S("q27", 2, 2, "Đoạn code sau làm gì?" + C(`query = 'SELECT * FROM InvoiceLine LIMIT 5;'
cursor.execute(query)
df = pd.DataFrame(cursor.fetchall())`),
  ["Thực thi truy vấn lấy 5 dòng đầu bảng InvoiceLine và chuyển toàn bộ kết quả thành DataFrame", "Chỉ thực thi truy vấn mà không lấy kết quả", "Lấy đúng 1 dòng kết quả", "Xóa 5 dòng đầu bảng InvoiceLine"],
  "`execute` thực thi; `fetchall()` lấy tất cả dòng kết quả."),

S("q66", 2, 2, "Trong đoạn truy xuất SQLite có khối `try ... except sqlite3.Error as error ... finally`, khối `finally` dùng để làm gì?",
  ["Đóng kết nối CSDL dù truy vấn thành công hay thất bại", "Chỉ chạy khi có lỗi", "Chỉ chạy khi không có lỗi", "Tạo lại kết nối mới"],
  "Trong finally: `if sqliteConnection: sqliteConnection.close()`."),

S("q67", 2, 2, "Trong khối `except sqlite3.Error as error:`, biến `error` chứa gì?",
  ["Đối tượng lỗi phát sinh từ thao tác SQLite để in ra thông báo", "Số dòng truy vấn được", "Đối tượng kết nối CSDL", "Câu lệnh SQL vừa chạy"],
  "Ví dụ `print('Error occurred - ', error)`."),

S("q68", 2, 3, "Bảng Invoice (InvoiceId, CustomerId, ...) của CSDL Chinook. Câu SQL nào lấy danh sách Customer có tham gia từ N hóa đơn trở lên?",
  ["SELECT CustomerId, COUNT(*) FROM Invoice GROUP BY CustomerId HAVING COUNT(*) >= N", "SELECT CustomerId FROM Invoice WHERE COUNT(*) >= N", "SELECT CustomerId FROM Invoice ORDER BY COUNT(*) >= N", "SELECT COUNT(CustomerId) >= N FROM Customer"],
  "Điều kiện trên hàm gộp phải đặt ở HAVING sau GROUP BY."),

S("q69", 2, 2, "Trong ứng dụng Flask kết nối MySQL, gói nào cung cấp lớp `MySQL`?",
  ["from flaskext.mysql import MySQL", "from flask import MySQL", "import mysql.flask", "from pymysql import Flask"],
  "Code: `from flask import Flask`, `from flaskext.mysql import MySQL`, `app = Flask(__name__)`, `mysql = MySQL()`."),

S("q70", 2, 2, "Trong cấu hình Flask-MySQL, khóa cấu hình nào chỉ định tên cơ sở dữ liệu cần kết nối?",
  ["app.config['MYSQL_DATABASE_DB']", "app.config['MYSQL_DATABASE_USER']", "app.config['MYSQL_DATABASE_HOST']", "app.config['MYSQL_DATABASE_NAME_TABLE']"],
  "Các khóa: MYSQL_DATABASE_USER, MYSQL_DATABASE_PASSWORD, MYSQL_DATABASE_DB, MYSQL_DATABASE_HOST; sau đó `mysql.init_app(app)`."),

S("q28", 2, 2, "Trong ứng dụng Flask đã kết nối MySQL (`conn = mysql.connect()`, `cursor = conn.cursor()`), lệnh nào lấy tất cả dữ liệu bảng student?",
  ["cursor.execute(\"select * from student\"); data = cursor.fetchall()", "cursor.execute(\"get all from student\")", "cursor.query(\"select * from student\")", "conn.fetch(\"select * from student\")"],
  "Duyệt kết quả: `for item in data: print(item[0], \"\\t\", item[1], \"\\t\", item[2])`."),

S("q71", 2, 2, "Kết quả `cursor.fetchall()` trả về các dòng của bảng student (ID, Code, Name). Trong vòng lặp `for item in data:`, `item[1]` là gì?",
  ["Giá trị cột thứ hai (Code) của dòng hiện tại", "Giá trị cột ID", "Dòng thứ hai của bảng", "Tên bảng"],
  "Mỗi item là một tuple; chỉ số bắt đầu từ 0."),

// ================= 2.7 THÁCH THỨC BIG DATA =================
S("q29", 2, 1, "3Vs cơ bản của Big Data gồm những yếu tố nào?",
  ["Volume, Velocity, Variety", "Volume, Value, Veracity", "Velocity, Variety, Value", "Volume, Velocity, Value"],
  "5Vs bổ sung thêm Veracity và Value."),

S("q72", 2, 1, "'Volume' trong Big Data đề cập đến điều gì?",
  ["Khối lượng (kích thước) dữ liệu rất lớn", "Tốc độ tạo dữ liệu", "Độ tin cậy dữ liệu", "Sự đa dạng dữ liệu"],
  "Volume = khối lượng."),

S("q73", 2, 1, "'Velocity' trong Big Data đề cập đến điều gì?",
  ["Tốc độ dữ liệu được tạo ra và cần xử lý", "Giá trị kinh doanh của dữ liệu", "Kích thước dữ liệu", "Nguồn gốc dữ liệu"],
  "Velocity = tốc độ."),

S("q30", 2, 2, "'Variety' trong Big Data có nghĩa là gì?",
  ["Sự đa dạng của các loại dữ liệu (có cấu trúc, phi cấu trúc, bán cấu trúc)", "Tốc độ tạo dữ liệu", "Kích thước dữ liệu", "Độ tin cậy dữ liệu"],
  "Variety = đa dạng."),

S("q31", 2, 2, "'Veracity' trong 5Vs của Big Data đề cập đến điều gì?",
  ["Độ tin cậy, tính xác thực, nguồn gốc của dữ liệu", "Giá trị của dữ liệu", "Khối lượng dữ liệu", "Tốc độ xử lý"],
  "Veracity = tính xác thực."),

S("q74", 2, 2, "'Value' trong 5Vs của Big Data đề cập đến điều gì?",
  ["Giá trị (lợi ích kinh doanh) khai thác được từ dữ liệu", "Độ tin cậy của dữ liệu", "Tốc độ tạo dữ liệu", "Định dạng dữ liệu"],
  "Value = giá trị."),

S("q32", 2, 2, "Thách thức nào KHÔNG thuộc 8 thách thức khi xử lý Big Data (theo Capterra)?",
  ["Thiếu nguồn điện cung cấp cho máy chủ", "Quản lý khối lượng dữ liệu khổng lồ", "Tích hợp dữ liệu từ nhiều nguồn", "Đảm bảo chất lượng dữ liệu"],
  "8 thách thức: quản lý khối lượng lớn, tích hợp nhiều nguồn, chất lượng dữ liệu, bảo mật, chọn đúng công cụ, mở rộng hệ thống và chi phí, thiếu chuyên gia, sự phản kháng của tổ chức."),

M("q75", 2, 2, "Những thách thức nào thuộc nhóm kỹ thuật khi xử lý Big Data?",
  ["Keeping data secure (bảo mật dữ liệu)", "Selecting the right big data tools (chọn đúng công cụ)", "Scaling systems and costs efficiently (mở rộng hệ thống và chi phí hiệu quả)", "Organizational resistance (sự phản kháng của tổ chức)"], 3,
  "Sự phản kháng của tổ chức là thách thức về con người, tổ chức."),

M("q33", 2, 2, "Những thách thức nào về nhân sự và tổ chức khi triển khai Big Data?",
  ["Thiếu chuyên gia dữ liệu có kỹ năng (Lack of skilled data professionals)", "Sự phản kháng từ tổ chức (Organizational resistance)", "Chi phí mua ổ cứng", "Dữ liệu quá sạch"], 2,
  "Thách thức số 7 và số 8."),
];
module.exports = QUESTIONS_C2;
