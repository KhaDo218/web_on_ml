// ============================================================================
// CHƯƠNG 7: ML.NET Framework & Tích hợp mô hình
// Nguồn: Slide 11 (Microsoft ML Framework), 12 (Customize Sentiment model),
//        13 (Integrated Customer Sentiment Model into Existing Project)
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// C(code) tạo khối code nhiều dòng.
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c7-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c7-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });
const C = (code) => "\n```\n" + code + "\n```\n";

const QUESTIONS_C7 = [
// ================= GIỚI THIỆU ML.NET =================
S("q1", 7, 1, "ML.NET là gì?",
  ["Framework máy học miễn phí, mã nguồn mở, đa nền tảng dành riêng cho lập trình viên .NET", "Thư viện vẽ biểu đồ của Python", "Hệ quản trị CSDL của Microsoft", "Dịch vụ đám mây trả phí của Google"],
  "Cho phép phát triển và tích hợp mô hình máy học tùy biến vào ứng dụng .NET."),

S("q2", 7, 1, "Để dùng ML.NET, lập trình viên có cần kinh nghiệm máy học từ trước không?",
  ["Không cần kinh nghiệm máy học trước đó", "Bắt buộc có bằng tiến sĩ AI", "Cần thành thạo TensorFlow", "Cần biết lập trình R"],
  "ML.NET có công cụ trong Visual Studio và CLI đa nền tảng."),

M("q3", 7, 2, "Những tính năng nổi tiếng nào của Microsoft được ML.NET hỗ trợ?",
  ["Windows Hello", "Bing Ads", "PowerPoint Design Ideas", "Google Translate"], 3,
  "Google Translate không phải sản phẩm Microsoft."),

M("q71", 7, 1, "Ứng dụng .NET thông minh xây dựng với ML.NET có thể có những tính năng nào?",
  ["Nhận diện cảm xúc và phân tích cảm xúc (emotion and sentiment detection)", "Nhận dạng hình ảnh và giọng nói (vision and speech recognition)", "Hiểu ngôn ngữ, tri thức và tìm kiếm", "Tự động sửa phần cứng máy tính"], 3,
  "Build intelligent .NET apps with emotion, sentiment, vision, speech, language understanding, knowledge, search."),

// ================= CODE WORKFLOW =================
S("q4", 7, 2, "Trong quy trình code (Code workflow) của ML.NET, dữ liệu huấn luyện được thu thập và tải vào đối tượng nào?",
  ["IDataView", "DataFrame", "DataTable", "ITransformer"],
  "IDataView là cấu trúc dữ liệu đầu vào của ML.NET."),

S("q72", 7, 2, "Sau khi tải dữ liệu, bước tiếp theo trong Code workflow của ML.NET là gì?",
  ["Khai báo pipeline các thao tác trích xuất đặc trưng (features) và áp dụng thuật toán máy học", "Lưu mô hình ra file zip", "Gọi Predict", "Tải mô hình vào ITransformer"],
  "Thứ tự: Load data -> Pipeline -> Fit -> Evaluate -> Save -> Load -> Predict."),

S("q5", 7, 2, "Trong ML.NET, mô hình được huấn luyện bằng cách gọi phương thức nào trên pipeline?",
  ["Fit()", "Train()", "Run()", "Execute()"],
  "Ví dụ: model = estimator.Fit(splitDataView.TrainSet);"),

S("q6", 7, 2, "Sau khi huấn luyện và đánh giá, mô hình ML.NET được lưu ở định dạng nào?",
  ["Định dạng nhị phân (file .zip)", "File .csv", "File .json", "File .txt"],
  "Ví dụ SentimentModel.zip, ML.Emotion-16072023-112715.zip."),

S("q7", 7, 2, "Khi tải lại mô hình đã lưu, ML.NET dùng đối tượng nào để đại diện mô hình?",
  ["ITransformer", "IDataView", "MLContext", "IEstimator"],
  "model = mlContext.Model.Load(modelFileName, out modelSchema);"),

S("q8", 7, 2, "Để dự đoán với mô hình đã tải, ML.NET dùng cách nào?",
  ["Tạo PredictionEngine bằng CreatePredictionEngine rồi gọi Predict()", "Gọi model.Fit()", "Gọi mlContext.Data.LoadFromTextFile()", "Gọi model.Evaluate()"],
  "PredictionEngine<TInput, TOutput>."),

S("q73", 7, 3, "Thứ tự đúng của Code workflow ML.NET là gì?",
  ["Load data vào IDataView -> tạo pipeline -> Fit() -> Evaluate -> Save -> Load vào ITransformer -> CreatePredictionEngine().Predict()", "Fit() -> Load data -> Save -> Pipeline -> Predict", "Predict -> Fit -> Evaluate -> Load", "Save -> Load -> Fit -> Pipeline"],
  "Đây là quá trình lặp để cải thiện mô hình."),

// ================= TÍNH NĂNG =================
M("q9", 7, 1, "Những đặc điểm nổi bật nào của ML.NET?",
  ["Built for .NET developers", "Custom ML made easy with AutoML", "Extended with TensorFlow & more; High performance and accuracy", "Chỉ chạy được trên Linux"], 3,
  "Còn có Trusted and proven at scale."),

M("q10", 7, 1, "ML.NET cho phép tạo mô hình máy học tùy biến bằng ngôn ngữ nào?",
  ["C#", "F#", "Python", "PHP"], 2,
  "Không cần rời khỏi hệ sinh thái .NET."),

M("q11", 7, 2, "ML.NET có thể tích hợp vào những loại ứng dụng nào?",
  ["Web, mobile", "Desktop, games", "IoT", "Chỉ ứng dụng Console"], 3,
  "Tận dụng kiến thức, kỹ năng, code và thư viện .NET sẵn có."),

M("q12", 7, 2, "Những kịch bản (scenarios) nào ML.NET hỗ trợ?",
  ["Sentiment analysis, Product recommendation", "Price prediction, Customer segmentation", "Object detection, Fraud detection, Sales spike detection", "Biên dịch mã nguồn C++"], 3,
  "Còn có Image classification, Sales forecasting."),

S("q13", 7, 2, "Phân tích cảm xúc đánh giá khách hàng (Sentiment analysis) trong ML.NET dùng loại thuật toán nào?",
  ["Phân loại nhị phân (binary classification)", "Hồi quy (regression)", "Gom cụm (clustering)", "Matrix factorization"],
  "Phát hiện gian lận thẻ tín dụng cũng dùng binary classification."),

S("q74", 7, 2, "Gợi ý sản phẩm dựa trên lịch sử mua hàng (Product recommendation) trong ML.NET dùng thuật toán nào?",
  ["Matrix factorization", "Binary classification", "Anomaly detection", "Regression"],
  "Phân tích ma trận người dùng - sản phẩm."),

S("q14", 7, 2, "Xác định nhóm khách hàng có hồ sơ tương tự (Customer segmentation) dùng thuật toán nào?",
  ["Clustering", "Regression", "Binary classification", "Anomaly detection"],
  "Gom cụm."),

S("q15", 7, 2, "Dự đoán giá cước taxi dựa trên quãng đường (Price prediction) dùng thuật toán nào?",
  ["Regression", "Clustering", "Binary classification", "Matrix factorization"],
  "Dự báo doanh số (Sales forecasting) cũng dùng regression."),

S("q75", 7, 2, "Phát hiện đột biến doanh số sản phẩm (Sales spike detection) trong ML.NET dùng mô hình nào?",
  ["Anomaly detection", "Regression", "Clustering", "Matrix factorization"],
  "Phát hiện điểm bất thường trong chuỗi dữ liệu."),

S("q76", 7, 2, "Nhận dạng đối tượng trong ảnh (Object detection) và phân loại ảnh (Image classification) trong ML.NET dùng loại mô hình nào?",
  ["Object detection dùng mô hình học sâu ONNX; Image classification dùng mô hình học sâu TensorFlow", "Cả hai dùng hồi quy tuyến tính", "Cả hai dùng K-Means", "Cả hai dùng matrix factorization"],
  "ML.NET mở rộng bằng các framework khác."),

S("q16", 7, 2, "Model Builder và ML.NET CLI dùng công nghệ nào để tự động tìm mô hình tốt nhất?",
  ["Automated ML (AutoML)", "Deep Reinforcement Learning", "Genetic Programming", "Rule-based Expert System"],
  "Chỉ cần nạp dữ liệu, AutoML lo phần còn lại."),

S("q77", 7, 1, "Model Builder của ML.NET là gì?",
  ["Công cụ giao diện đơn giản trong Visual Studio để xây dựng mô hình máy học tùy biến", "Một ngôn ngữ lập trình", "Thư viện vẽ biểu đồ", "Hệ quản trị CSDL"],
  "ML.NET CLI là công cụ dòng lệnh tương ứng."),

M("q17", 7, 2, "ML.NET có thể tích hợp những framework máy học phổ biến nào khác?",
  ["TensorFlow", "ONNX", "Infer.NET", "Laravel"], 3,
  "Laravel là framework web PHP."),

S("q18", 7, 2, "Với bộ dữ liệu đánh giá Amazon 9GB, ML.NET huấn luyện mô hình phân tích cảm xúc như thế nào so với các framework khác?",
  ["Đạt độ chính xác 95%, trong khi các framework khác không xử lý được do lỗi bộ nhớ", "Đạt 50% và chậm nhất", "Không xử lý được do lỗi bộ nhớ", "Chỉ chạy được 10% dữ liệu"],
  "Khi huấn luyện trên 10% dữ liệu để các framework đều chạy được, ML.NET vẫn nhanh và chính xác nhất."),

M("q21", 7, 2, "Những sản phẩm Microsoft nào dùng chung framework ML.NET?",
  ["Power BI", "Microsoft Defender", "Outlook, Bing", "Adobe Photoshop"], 3,
  "Trusted and proven at scale."),

// ================= SAMPLE ML.NET MODEL BUILDER =================
S("q23", 7, 1, "Bộ dữ liệu Sentiment Labelled Sentences dùng cho bài mẫu ML.NET Model Builder được tải từ đâu?",
  ["UCI Machine Learning Repository", "Kaggle", "Google Drive", "GitHub của Microsoft"],
  "Giải nén và dùng file yelp_labelled.txt."),

S("q24", 7, 2, "File yelp_labelled.txt có cấu trúc như thế nào?",
  ["Mỗi dòng là một đánh giá nhà hàng; cột 1 là bình luận, cột 2 là cảm xúc (0 tiêu cực, 1 tích cực); phân tách bằng tab, không có header", "Có header, phân tách bằng dấu phẩy", "Cột 1 là cảm xúc, cột 2 là bình luận", "Mỗi dòng là một sản phẩm và giá"],
  "Dữ liệu từ Yelp."),

S("q25", 7, 1, "Bước 0 của bài mẫu: cần đảm bảo thành phần nào đã được cài trong Visual Studio?",
  ["ML.NET Model Builder", "Python Development", "Node.js Development", "SQL Server Data Tools"],
  "Kiểm tra trong Visual Studio Installer."),

S("q26", 7, 1, "Bước 1 của bài mẫu tạo project SentimentApp thuộc loại nào?",
  ["Windows Forms App", "Console App", "ASP.NET Core Web API", "Class Library"],
  "Màn hình đầu tiên của ứng dụng là Form."),

S("q27", 7, 2, "Bước 2 tạo mô hình máy học: chuột phải vào Project -> Add -> Machine Learning Model..., rồi đặt tên file nào?",
  ["SentimentModel.mbconfig", "SentimentModel.json", "SentimentModel.xml", "SentimentModel.zip"],
  "File .mbconfig lưu cấu hình Model Builder."),

S("q28", 7, 2, "Bước 3 (Pick a scenario): để dự đoán bình luận thuộc nhóm positive hay negative, chọn kịch bản nào?",
  ["Data classification", "Value prediction", "Recommendation", "Image classification"],
  "Value prediction dùng cho dự đoán giá trị số."),

S("q29", 7, 2, "Bước 4 (Select training environment) chọn môi trường nào cho kịch bản Classification?",
  ["Local (CPU) - huấn luyện cục bộ trên máy", "Azure", "Google Colab", "AWS SageMaker"],
  "Classification hiện chỉ hỗ trợ huấn luyện cục bộ."),

S("q78", 7, 2, "Bước 5 (Prepare and put Data) trong Model Builder hỗ trợ những nguồn dữ liệu nào?",
  ["File (csv, tsv, txt) và SQL Server", "Chỉ file Excel", "Chỉ MongoDB", "Chỉ ảnh"],
  "Browse tới file yelp_labelled.txt."),

S("q30", 7, 2, "Bước 6: dữ liệu yelp_labelled.txt không có header nên cột được đặt tên col0, col1. Cột nào được chọn làm Column to predict (Label)?",
  ["col1", "col0", "Cả hai cột", "Không chọn cột nào"],
  "col1 chứa nhãn 0/1; col0 là nội dung bình luận."),

S("q79", 7, 2, "Ở bước Train, thông số 'Time to train' (ví dụ 60 giây) có ý nghĩa gì?",
  ["Khoảng thời gian Model Builder được phép khám phá các mô hình với thuật toán và thiết lập khác nhau", "Thời gian một mô hình được dự đoán", "Thời gian tải dữ liệu", "Thời gian lưu mô hình"],
  "Nếu không tìm được mô hình có thể tăng thời gian; dữ liệu lớn cần thời gian dài hơn."),

S("q31", 7, 2, "Model Builder thử nhiều trainer như SdcaMaximumEntropyMulti, FastTreeOva, LbfgsLogisticRegressionOva, LbfgsMaximumEntropyMulti... rồi báo Best model. Best model được chọn theo tiêu chí nào?",
  ["Mô hình có độ chính xác (accuracy) cao nhất trong số các mô hình đã khám phá", "Mô hình chạy đầu tiên", "Mô hình có tên ngắn nhất", "Mô hình chạy lâu nhất"],
  "Kết quả hiển thị Best accuracy, Best model, Training time, Models explored."),

S("q32", 7, 2, "Phần Training results của Model Builder hiển thị những thông tin nào?",
  ["Best accuracy, Best model, Training time, Models explored (total), Generated code-behind", "Chỉ số dòng dữ liệu", "Chỉ tên file dữ liệu", "Danh sách khách hàng"],
  "Bảng Output còn có MicroAccuracy, MacroAccuracy, Duration của từng trainer."),

S("q37", 7, 2, "Ở bước Evaluate - Try your model, nhập câu 'Wow... Loved this place.' thì kết quả cho nhãn 1 khoảng 74% và nhãn 0 khoảng 26%. Mô hình dự đoán cảm xúc gì?",
  ["Tích cực (Positive), vì nhãn 1 có xác suất cao hơn", "Tiêu cực (Negative)", "Trung lập", "Không xác định"],
  "0 là negative, 1 là positive."),

S("q38", 7, 2, "Nhập câu 'I do not like that place' vào Try your model, kết quả cho nhãn 0 khoảng 94% và nhãn 1 khoảng 6%. Mô hình dự đoán cảm xúc gì?",
  ["Tiêu cực (Negative)", "Tích cực (Positive)", "Trung lập", "Không xác định"],
  "Nhãn 0 có xác suất cao hơn."),

M("q33", 7, 2, "Sau khi huấn luyện xong, những file nào được tự động thêm làm code-behind cho SentimentModel.mbconfig?",
  ["SentimentModel.zip", "SentimentModel.consumption.cs", "SentimentModel.training.cs", "SentimentModel.html"], 3,
  "Ba file code-behind."),

S("q34", 7, 2, "File SentimentModel.zip chứa gì?",
  ["Mô hình ML.NET đã huấn luyện, dạng file zip được serialize", "Mã nguồn giao diện", "Dữ liệu huấn luyện gốc", "Tài liệu hướng dẫn"],
  "Dùng để tải lại và dự đoán."),

S("q35", 7, 2, "File SentimentModel.consumption.cs chứa gì?",
  ["Các lớp input/output của mô hình và phương thức Predict để sử dụng mô hình", "Pipeline huấn luyện", "Dữ liệu yelp", "Cấu hình Visual Studio"],
  "Dùng ở bước Consume."),

S("q36", 7, 2, "File SentimentModel.training.cs chứa gì?",
  ["Pipeline huấn luyện: biến đổi dữ liệu, thuật toán và tham số dùng để huấn luyện mô hình cuối cùng", "Lớp ModelInput, ModelOutput", "Mô hình đã serialize", "Giao diện Form"],
  "Có thể dùng để huấn luyện lại."),

S("q80", 7, 2, "Ở bước Consume, Model Builder cung cấp những project template nào để sử dụng mô hình?",
  ["Console app và Web API", "Windows Forms và WPF", "Android và iOS", "Class Library và Unit Test"],
  "Ngoài ra có đoạn code mẫu (code snippet) để dự đoán."),

S("q81", 7, 2, "Đoạn code Consume sau in ra gì?" + C(`var sampleData = new SentimentModel.ModelInput()
{
    Col0 = "This restaurant was wonderful."
};
var result = SentimentModel.Predict(sampleData);
var sentiment = result.PredictedLabel == 1 ? "Positive" : "Negative";
Console.WriteLine($"Text: {sampleData.Col0}\\nSentiment: {sentiment}");`) + "(giả sử mô hình dự đoán nhãn 1)",
  ["Text: This restaurant was wonderful. và dòng Sentiment: Positive", "Sentiment: Negative", "Text: Col0", "Lỗi vì thiếu Fit"],
  "PredictedLabel == 1 nên sentiment là Positive."),

S("q39", 7, 2, "Trong sự kiện btnPredict_Click của Form demo, chương trình hiện ảnh picPositive khi nào?",
  ["Khi result.Prediction == 1", "Khi result.Prediction == 0", "Khi result.Score[1] > 0", "Khi txtInput rỗng"],
  "Ngược lại thì hiện picNegative."),

S("q40", 7, 2, "Trong Form demo, phần trăm tin cậy được hiển thị từ đâu?",
  ["Mảng result.Score, nhân 100 và làm tròn 2 chữ số bằng Math.Round", "Thuộc tính result.Accuracy", "Thuộc tính result.Label", "Biến txtInput.Text"],
  "lblPositive.Text = Math.Round(result.Score[0] * 100, 2) + \"%\"."),

// ================= CUSTOMIZE SENTIMENT MODEL (SentimentAppBinary) =================
M("q82", 7, 2, "Ứng dụng tùy biến SentimentAppBinary minh họa những bước máy học nào?",
  ["Chuẩn bị dữ liệu, chia train/test", "Chọn thuật toán, huấn luyện, đánh giá", "Lưu và sử dụng mô hình", "Vẽ biểu đồ 3D bằng Plotly"], 3,
  "Đồng thời dùng BackgroundWorker để cập nhật tiến trình trên giao diện."),

S("q41", 7, 2, "Trong SentimentAppBinary, thành phần nào giúp huấn luyện chạy ngầm và cập nhật giao diện theo thời gian thực?",
  ["BackgroundWorker", "Timer", "Thread.Sleep", "Task.Delay"],
  "Tránh treo giao diện khi huấn luyện lâu."),

S("q43", 7, 1, "Để cài ML.NET vào project SentimentAppBinary, ta dùng công cụ nào?",
  ["Chuột phải project -> Manage NuGet Packages", "pip install", "npm install", "Tải file .dll thủ công từ Google"],
  "NuGet là trình quản lý gói của .NET."),

S("q44", 7, 1, "Gói NuGet nào cần cài để dùng ML.NET?",
  ["Microsoft.ML", "System.ML", "ML.NET.Core", "Microsoft.AI"],
  "Sau đó using Microsoft.ML; using Microsoft.ML.Data;"),

S("q42", 7, 2, "Trên giao diện SentimentAppBinary, thành phần nào dùng để chọn file dataset khi nhấn nút Choose DataSet?",
  ["OpenFileDialog", "SaveFileDialog", "FolderBrowserDialog", "ColorDialog"],
  "Nằm trong nhóm Dialogs của Toolbox."),

M("q57", 7, 2, "Phần metric informations trên giao diện SentimentAppBinary hiển thị những chỉ số nào?",
  ["Accuracy, AUC ROC, AUC PR", "Log Loss, Log Loss Reduction, F1-Score", "Negative/Positive Precision, Negative/Positive Recall", "MAE, RMSE, inertia"], 3,
  "Đây là các chỉ số của CalibratedBinaryClassificationMetrics."),

S("q45", 7, 2, "Lớp FeedbackData khai báo như sau. Attribute `[LoadColumn(0)]` có ý nghĩa gì?" + C(`public class FeedbackData
{
    [LoadColumn(0)]
    public string Data;

    [LoadColumn(1), ColumnName("Label")]
    public bool Lable;
}`),
  ["Nạp giá trị cột thứ nhất (index 0) của file vào trường Data", "Đặt tên cột là 0", "Bỏ qua cột thứ nhất", "Đánh dấu Data là nhãn"],
  "Cột index 1 được nạp vào Lable."),

S("q46", 7, 2, "Trong FeedbackData, vì sao trường `Lable` có `ColumnName(\"Label\")`?",
  ["Để ML.NET hiểu cột này là cột nhãn mặc định tên \"Label\" dùng khi huấn luyện và đánh giá", "Để đổi kiểu bool thành string", "Để ẩn cột", "Để tạo khóa chính"],
  "Thuật toán dùng labelColumnName: \"Label\"."),

M("q47", 7, 2, "Lớp FeedbackSentiment kế thừa FeedbackData khai báo thêm những thuộc tính nào?",
  ["PredictedLabel (bool) với ColumnName(\"PredictedLabel\")", "Probability (float) với ColumnName(\"Probability\")", "Score (double[])", "Features (string)"], 2,
  "Đây là lớp kết quả dự đoán."),

S("q83", 7, 2, "Cú pháp `public class FeedbackSentiment : FeedbackData` trong C# có nghĩa là gì?",
  ["FeedbackSentiment kế thừa từ FeedbackData", "FeedbackSentiment là interface", "FeedbackData kế thừa FeedbackSentiment", "Hai lớp độc lập"],
  "Dấu : thể hiện kế thừa trong C#."),

S("q48", 7, 2, "Trong frmMain, đối tượng nào khởi tạo môi trường ML.NET?",
  ["private MLContext mlContext = new MLContext(42);", "IDataView dataView;", "ITransformer model;", "BackgroundWorker worker;"],
  "Tham số 42 là seed để kết quả lặp lại được."),

S("q49", 7, 2, "Trong frmMain, biến nào lưu dữ liệu đã tải từ file?",
  ["IDataView dataView", "TrainTestData splitDataView", "ITransformer model", "string folder"],
  "splitDataView lưu dữ liệu đã chia train/test."),

S("q50", 7, 2, "Trong frmMain, biến nào lưu mô hình đã huấn luyện?",
  ["ITransformer model", "IDataView dataView", "MLContext mlContext", "string folder = \"Models\""],
  "folder là thư mục lưu các mô hình."),

S("q51", 7, 3, "Trong btnTrain_Click, sau khi tạo BackgroundWorker và gắn các sự kiện, lệnh nào bắt đầu chạy ngầm?" + C(`worker = new BackgroundWorker();
worker.WorkerReportsProgress = true;
worker.WorkerSupportsCancellation = true;
worker.DoWork += Worker_DoWork;
worker.ProgressChanged += Worker_ProgressChanged;
worker.RunWorkerCompleted += Worker_RunWorkerCompleted;
______;`),
  ["worker.RunWorkerAsync()", "worker.Start()", "worker.Run()", "worker.DoWork()"],
  "RunWorkerAsync kích hoạt sự kiện DoWork trên luồng nền."),

S("q84", 7, 2, "Trong BackgroundWorker, sự kiện nào được gọi khi công việc chạy ngầm hoàn tất (ví dụ hiện MessageBox 'Trained model finished!')?",
  ["RunWorkerCompleted", "DoWork", "ProgressChanged", "Disposed"],
  "Trong đó progressBarTrain.Visible = false."),

S("q85", 7, 3, "Ô txtTrainRate nhập 80 (%). Lệnh tính testFraction cho kết quả bao nhiêu?" + C(`double testFraction = (100 - double.Parse(txtTrainRate.Text)) / 100;`),
  ["0.2", "0.8", "20", "80"],
  "(100 - 80) / 100 = 0.2 tức 20% dữ liệu dùng để test."),

S("q52", 7, 2, "Phương thức nào chia dữ liệu thành tập Train và Test trong ML.NET?",
  ["mlContext.Data.TrainTestSplit(dataView, testFraction: testFraction)", "mlContext.Data.Split(dataView)", "dataView.Split(0.2)", "mlContext.Model.TrainTestSplit(dataView)"],
  "Kết quả kiểu TrainTestData có TrainSet và TestSet."),

S("q54", 7, 2, "Trong pipeline huấn luyện, phương thức nào chuyển văn bản thành vector đặc trưng (Features)?",
  ["mlContext.Transforms.Text.FeaturizeText(outputColumnName: \"Features\", inputColumnName: nameof(FeedbackData.Data))", "mlContext.Transforms.Concatenate(\"Features\")", "mlContext.Data.LoadFromTextFile()", "mlContext.Transforms.Conversion.MapValueToKey()"],
  "Văn bản phải được số hóa trước khi đưa vào thuật toán."),

S("q53", 7, 2, "Thuật toán nào được nối (Append) vào pipeline để huấn luyện mô hình phân loại nhị phân trong SentimentAppBinary?",
  ["mlContext.BinaryClassification.Trainers.SdcaLogisticRegression(labelColumnName: \"Label\", featureColumnName: \"Features\")", "mlContext.Regression.Trainers.Sdca()", "mlContext.Clustering.Trainers.KMeans()", "mlContext.MulticlassClassification.Trainers.LbfgsMaximumEntropy()"],
  "Sau đó model = estimator.Fit(splitDataView.TrainSet)."),

S("q86", 7, 3, "Trong btnEvaluate_Click, đoạn sau làm gì?" + C(`IDataView predictions = model.Transform(splitDataView.TestSet);
CalibratedBinaryClassificationMetrics metrics =
    mlContext.BinaryClassification.Evaluate(predictions, "Label");
txtAccuracy.Text = Math.Round(metrics.Accuracy, 2).ToString();`),
  ["Dự đoán trên tập Test, tính các chỉ số đánh giá phân loại nhị phân và hiển thị Accuracy làm tròn 2 chữ số", "Huấn luyện lại mô hình", "Lưu mô hình", "Chia lại dữ liệu"],
  "Các chỉ số khác: AreaUnderRocCurve, AreaUnderPrecisionRecallCurve, F1Score, LogLoss..."),

S("q87", 7, 2, "Trong metrics của phân loại nhị phân, thuộc tính nào ứng với chỉ số AUC ROC?",
  ["metrics.AreaUnderRocCurve", "metrics.AreaUnderPrecisionRecallCurve", "metrics.LogLoss", "metrics.F1Score"],
  "AreaUnderPrecisionRecallCurve ứng với AUC PR."),

S("q88", 7, 3, "Trong btnSaveModel_Click, mô hình được lưu bằng lệnh nào?",
  ["mlContext.Model.Save(model, splitDataView.TrainSet.Schema, path);", "model.SaveAs(path);", "File.WriteAllText(path, model);", "mlContext.Data.Save(model, path);"],
  "path = folder + \"\\\\ML.Emotion-\" + DateTime.Now.ToString(\"ddMMyyyy-hhmmss\") + \".zip\"."),

S("q89", 7, 2, "Tên file mô hình được tạo bằng `\"ML.Emotion-\" + DateTime.Now.ToString(\"ddMMyyyy-hhmmss\") + \".zip\"`. Nếu lưu lúc 16/07/2023 11:27:15 thì tên file là gì?",
  ["ML.Emotion-16072023-112715.zip", "ML.Emotion-20230716-112715.zip", "ML.Emotion-07162023-1127.zip", "ML.Emotion.zip"],
  "dd = ngày, MM = tháng, yyyy = năm, hh mm ss = giờ phút giây."),

S("q90", 7, 2, "Trong btnSaveModel_Click, đoạn `if (Directory.Exists(folder) == false) Directory.CreateDirectory(folder);` dùng để làm gì?",
  ["Tạo thư mục Models nếu chưa tồn tại trước khi lưu mô hình", "Xóa thư mục Models", "Liệt kê file mô hình", "Kiểm tra mô hình đã huấn luyện chưa"],
  "Sau khi lưu gọi LoadModelIntoCombo() để cập nhật danh sách."),

S("q70", 7, 2, "Hàm LoadModelIntoCombo nạp danh sách mô hình vào ComboBox như thế nào?",
  ["Lấy các file trong thư mục folder (\"Models\") bằng Directory.GetFiles và thêm tên file (FileInfo.Name) vào cboModel", "Đọc từ CSDL", "Tải từ Internet", "Đọc từ file yelp_labelled.txt"],
  "Hàm được gọi trong sự kiện Load của Form."),

S("q55", 7, 2, "Trong btnPicDataset_Click, phương thức nào tải dữ liệu từ file text vào IDataView?",
  ["mlContext.Data.LoadFromTextFile<FeedbackData>(openFileDialog1.FileName, hasHeader: false)", "mlContext.Data.ReadCsv()", "File.ReadAllLines()", "mlContext.Model.Load()"],
  "hasHeader: false vì file không có dòng tiêu đề."),

S("q56", 7, 2, "Trong btnLoadModel_Click, lệnh nào tải mô hình đã lưu?",
  ["model = mlContext.Model.Load(modelFileName, out modelSchema);", "model = mlContext.Data.LoadFromTextFile(modelFileName);", "model = File.Open(modelFileName);", "model = new ITransformer(modelFileName);"],
  "modelSchema là DataViewSchema mô tả dữ liệu của pipeline."),

S("q91", 7, 2, "Trong btnLoadModel_Click, câu lệnh `if (cboModel.SelectedIndex == -1) return;` có ý nghĩa gì?",
  ["Nếu chưa chọn mô hình nào trong ComboBox thì dừng xử lý", "Nếu chọn mô hình đầu tiên thì dừng", "Xóa mô hình", "Chọn mô hình cuối cùng"],
  "SelectedIndex = -1 nghĩa là chưa có phần tử nào được chọn."),

S("q92", 7, 3, "Trong btnPredict_Click, đoạn sau làm gì?" + C(`PredictionEngine<FeedbackData, FeedbackSentiment> predictionFunction =
    mlContext.Model.CreatePredictionEngine<FeedbackData, FeedbackSentiment>(model);
var resultPrediction = predictionFunction.Predict(feedback);
double percentPositive = Math.Round(resultPrediction.Probability * 100, 2);
double percentNegative = Math.Round((100 - percentPositive), 2);`),
  ["Tạo PredictionEngine, dự đoán câu nhập và tính phần trăm Positive từ Probability, phần trăm Negative = 100 - Positive", "Huấn luyện mô hình mới", "Đánh giá mô hình trên tập Test", "Lưu mô hình"],
  "FeedbackData là đầu vào, FeedbackSentiment là đầu ra."),

S("q66", 7, 2, "Kết quả dự đoán có Probability = 0.9865. percentPositive và percentNegative bằng bao nhiêu?",
  ["98.65% và 1.35%", "1.35% và 98.65%", "0.99% và 0.01%", "98.65% và 98.65%"],
  "percentPositive = Round(0.9865 * 100, 2) = 98.65; percentNegative = 100 - 98.65 = 1.35."),

S("q67", 7, 2, "Sau khi dự đoán, điều kiện nào để hiển thị ảnh picPositive?",
  ["resultPrediction.PredictedLabel == true", "resultPrediction.Probability == 0", "radPositive.Checked == false", "percentNegative > 50"],
  "Ngược lại hiển thị picNegative."),

// ================= TÍCH HỢP VÀO DỰ ÁN CÓ SẴN =================
M("q93", 7, 1, "Mục tiêu của việc tích hợp mô hình cảm xúc khách hàng vào dự án có sẵn gồm những gì?",
  ["Xây dựng các lớp mô hình đa tầng (Multi-tier)", "Xuất (export) và tái sử dụng mô hình máy học", "Tích hợp mô hình vào dự án đã có", "Viết lại toàn bộ dự án cũ"], 3,
  "Dự án có sẵn là ChiecBungDoiApp."),

S("q58", 7, 2, "Mục đích tạo Class Library SentimentModel là gì?",
  ["Tách các lớp mô hình dữ liệu ra thư viện riêng để dùng chung, tái sử dụng cho nhiều project (kiến trúc đa tầng)", "Tạo giao diện mới", "Lưu dữ liệu huấn luyện", "Thay thế ML.NET"],
  "Khi đó SentimentAppBinary chỉ còn giao diện frmMain.cs."),

S("q59", 7, 2, "Những lớp nào được chuyển từ SentimentAppBinary sang Class Library SentimentModel?",
  ["FeedbackData và FeedbackSentiment", "frmMain", "Program", "BackgroundWorker"],
  "namespace đổi thành SentimentModel."),

S("q94", 7, 2, "Project Class Library SentimentModel có cần cài gói Microsoft.ML không?",
  ["Có, vì các lớp dùng attribute LoadColumn, ColumnName của Microsoft.ML.Data", "Không bao giờ cần", "Chỉ cần cài Python", "Chỉ cần cài SQL Server"],
  "using Microsoft.ML.Data;"),

S("q60", 7, 2, "Để SentimentAppBinary dùng được các lớp trong SentimentModel, ta làm gì?",
  ["Chuột phải SentimentAppBinary -> Add -> Reference... -> Projects -> tick SentimentModel", "Copy file .cs sang", "Cài NuGet SentimentModel", "Đổi tên project"],
  "Sau khi thêm, SentimentModel xuất hiện trong References."),

S("q61", 7, 1, "Sau khi thêm Reference, dòng lệnh nào cần đặt ở đầu file code để dùng các lớp trong SentimentModel?",
  ["using SentimentModel;", "import SentimentModel;", "#include SentimentModel", "require SentimentModel;"],
  "C# dùng using để khai báo namespace."),

S("q95", 7, 2, "Để đưa project ChiecBungDoiApp đã có vào Solution, ta làm thế nào?",
  ["Chuột phải Solution -> Add -> Existing Project... -> chọn file ChiecBungDoiApp.csproj", "Copy thư mục vào Desktop", "File -> New Project", "Mở file .sln mới"],
  "Sau đó thêm reference SentimentModel và ML.NET cho ChiecBungDoiApp."),

S("q62", 7, 2, "ChiecBungDoiApp có cần tạo lại các bước huấn luyện mô hình không?",
  ["Không, ChiecBungDoiApp chỉ dùng các mô hình đã huấn luyện sẵn", "Có, phải huấn luyện lại mỗi lần chạy", "Phải huấn luyện bằng Python trước", "Phải dùng Model Builder lại"],
  "Mô hình được tạo và lưu từ SentimentAppBinary."),

S("q63", 7, 1, "Các mô hình huấn luyện sẵn mà ChiecBungDoiApp dùng có định dạng gì?",
  ["File .zip (ví dụ ML.Emotion-16072023-112715.zip)", "File .csv", "File .exe", "File .mbconfig"],
  "Được copy vào thư mục Models."),

S("q68", 7, 2, "Cơ sở dữ liệu của ChiecBungDoiApp được truy cập qua lớp DataContext nào?",
  ["DbChiecBungDoiDataContext", "SentimentModelContext", "MLContext", "SalesDatabaseContext"],
  "DbChiecBungDoiDataContext context = new DbChiecBungDoiDataContext();"),

S("q69", 7, 2, "Trong frmPhanTichCamXuc, control nào hiển thị danh sách sản phẩm và control nào hiển thị bình luận?",
  ["lvProduct và lvComment (ListView)", "cboProduct và cboComment (ComboBox)", "dgvProduct và dgvComment (DataGridView)", "tvProduct và tvComment (TreeView)"],
  "Còn có cboModel, txtComment, lblNegativeProbability, lblPositiveProbability, picPositive, picNegative."),

S("q96", 7, 2, "Trong sự kiện Load của frmPhanTichCamXuc gọi những hàm nào?",
  ["LoadModelIntoCombo() và LoadProductIntoListView()", "TrainModel() và SaveModel()", "Evaluate() và Predict()", "InitializeComponent() và Close()"],
  "Nạp danh sách mô hình và danh sách sản phẩm khi mở Form."),

S("q97", 7, 3, "Hàm LoadProductIntoListView có đoạn sau. Lệnh `lvi.Tag = item;` dùng để làm gì?" + C(`var data = context.Products.ToList();
lvProduct.Items.Clear();
foreach (var item in data)
{
    ListViewItem lvi = new ListViewItem(item.Id.ToString());
    lvi.SubItems.Add(item.ProductName);
    lvi.SubItems.Add(item.Catalog.CatalogName);
    lvi.Tag = item;
    lvProduct.Items.Add(lvi);
}`),
  ["Gắn đối tượng Product vào dòng ListView để khi chọn dòng có thể lấy lại đối tượng (SelectedItems[0].Tag as Product)", "Đặt màu cho dòng", "Đặt tiêu đề cột", "Xóa sản phẩm"],
  "Tag lưu dữ liệu tùy ý kèm control/item."),

S("q98", 7, 3, "Trong lvProduct_SelectedIndexChanged, mỗi bình luận được dự đoán cảm xúc; nếu PredictedLabel == false thì chương trình làm gì?",
  ["Thêm chữ \"Negative\" vào cột và tô dòng màu đỏ (lvi.ForeColor = Color.Red)", "Xóa bình luận", "Thêm \"Positive\"", "Không hiển thị bình luận"],
  "Nếu true thì thêm \"Positive\"."),

S("q64", 7, 3, "Trong lvComment_SelectedIndexChanged, PredictionEngine được tạo bằng lệnh nào?",
  ["mlContext.Model.CreatePredictionEngine<FeedbackData, FeedbackSentiment>(model)", "mlContext.Data.CreatePredictionEngine(model)", "model.CreatePredictionEngine()", "new PredictionEngine(model)"],
  "Đầu vào FeedbackData chứa nội dung bình luận c.Comment1."),

S("q65", 7, 2, "Sau khi tạo predictionFunction, lệnh nào lấy kết quả dự đoán cho bình luận?",
  ["var resultPrediction = predictionFunction.Predict(feedback);", "var resultPrediction = model.Fit(feedback);", "var resultPrediction = mlContext.Evaluate(feedback);", "var resultPrediction = feedback.Predict();"],
  "resultPrediction có PredictedLabel và Probability."),
];
module.exports = QUESTIONS_C7;
