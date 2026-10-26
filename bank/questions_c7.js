// ============================================================================
// CHƯƠNG 7: ML.NET Framework & Tích hợp mô hình (Dựa trên Slide 11, 12, 13)
// Soạn dựa trên Slide 11, 12, 13 của TS. Trần Duy Thanh
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c7-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c7-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C7 = [
// ================= PHẦN 1: GIỚI THIỆU ML.NET (SLIDE 11) =================
S("q1", 7, 1, "ML.NET là gì?",
  ["Là một framework học máy miễn phí, mã nguồn mở, đa nền tảng được thiết kế dành riêng cho các nhà phát triển .NET", "Là một thư viện Python dùng để phân tích dữ liệu lớn", "Là một phần mềm độc quyền của Microsoft dùng để huấn luyện mô hình AI trên Cloud", "Là một ngôn ngữ lập trình mới chuyên dụng cho trí tuệ nhân tạo"],
  "Slide 11 (Page 3): ML.NET is a free, open-source, cross-platform machine learning framework made specifically for .NET developers."),

S("q2", 7, 1, "Để sử dụng ML.NET, nhà phát triển có cần kinh nghiệm trước đó về học máy (machine learning) không?",
  ["Không cần, bạn có thể phát triển và tích hợp các mô hình học máy tùy chỉnh vào ứng dụng .NET mà không cần kinh nghiệm trước đó", "Có, bắt buộc phải có ít nhất 2 năm kinh nghiệm về Data Science", "Có, phải biết sâu về thuật toán học sâu (Deep Learning)", "Chỉ cần biết Python là đủ"],
  "Slide 11 (Page 3): ...without needing prior machine learning experience."),

M("q3", 7, 2, "Những tính năng nào của Microsoft được nhắc đến là đang sử dụng ML.NET?",
  ["Windows Hello", "Bing Ads", "PowerPoint Design Ideas", "Microsoft Word"], 3,
  "Slide 11 (Page 3): ...powers recognized Microsoft features like Windows Hello, Bing Ads, PowerPoint Design Ideas, and more."),

S("q4", 7, 2, "Trong quy trình làm việc bằng code (Code workflow) của ML.NET, bước đầu tiên 'Thu thập và tải dữ liệu huấn luyện' sẽ đưa dữ liệu vào đối tượng nào?",
  ["IDataView", "ITransformer", "Estimator", "DataFrame"],
  "Slide 11 (Page 4): Collect and load training data into an IDataView object."),

S("q5", 7, 2, "Trong quy trình ML.NET, để huấn luyện một mô hình (Train model), ta gọi phương thức nào trên pipeline?",
  ["Fit()", "Train()", "Execute()", "Build()"],
  "Slide 11 (Page 4): Train a model by calling Fit() on the pipeline."),

S("q6", 7, 2, "Sau khi huấn luyện và đánh giá, mô hình ML.NET được lưu dưới định dạng nào?",
  ["Định dạng nhị phân (Binary format)", "Định dạng JSON", "Định dạng XML", "Định dạng CSV"],
  "Slide 11 (Page 4): Save the model into binary format, for use in an application."),

S("q7", 7, 2, "Khi tải mô hình đã lưu trở lại ứng dụng, ML.NET sử dụng đối tượng nào để đại diện cho mô hình đó?",
  ["ITransformer", "IDataView", "Estimator", "MLContext"],
  "Slide 11 (Page 4): Load the model back into an ITransformer object."),

S("q8", 7, 2, "Để thực hiện dự đoán (Make predictions) với mô hình đã tải, ta sử dụng phương thức nào?",
  ["CreatePredictionEngine().Predict()", "Model.Predict()", "Transformer.Predict()", "DataView.Predict()"],
  "Slide 11 (Page 4): Make predictions by calling CreatePredictionEngine.Predict()."),

M("q9", 7, 1, "Đâu là những đặc điểm nổi bật của ML.NET?",
  ["Được xây dựng cho các nhà phát triển .NET", "Học máy tùy chỉnh dễ dàng với AutoML", "Được mở rộng với TensorFlow & hơn thế nữa", "Chỉ chạy được trên hệ điều hành Windows"], 3,
  "Slide 11 (Page 5): Built for .NET developers, Custom ML made easy with AutoML, Extended with TensorFlow & more, High performance and accuracy, Trusted and proven at scale."),

M("q10", 7, 1, "ML.NET cho phép lập trình viên viết code bằng những ngôn ngữ nào?",
  ["C#", "F#", "Python", "Java"], 2,
  "Slide 11 (Page 6): ...create custom ML models using C# or F# without having to leave the .NET ecosystem."),

M("q11", 7, 2, "ML.NET có thể được tích hợp vào những loại ứng dụng nào?",
  ["Web", "Mobile", "Desktop", "Games"], 4,
  "Slide 11 (Page 6): ...integrate machine learning into your web, mobile, desktop, games, and IoT apps."),

M("q12", 7, 2, "Những kịch bản (scenarios) nào sau đây được ML.NET hỗ trợ (theo slide 11)?",
  ["Sentiment analysis (Phân tích cảm xúc)", "Customer segmentation (Phân khúc khách hàng)", "Sales spike detection (Phát hiện đột biến doanh số)", "Product recommendation (Gợi ý sản phẩm)"], 4,
  "Slide 11 (Page 7): Liệt kê các scenarios: Sentiment analysis, Customer segmentation, Sales spike detection, Product recommendation, Object detection, Image classification, Price prediction, Fraud detection, Sales forecasting."),

S("q13", 7, 2, "Để phân tích cảm xúc (Sentiment analysis) của đánh giá khách hàng, ML.NET sử dụng loại thuật toán nào?",
  ["Binary classification algorithm (Thuật toán phân loại nhị phân)", "Clustering algorithm (Thuật toán gom cụm)", "Regression algorithm (Thuật toán hồi quy)", "Anomaly detection model (Mô hình phát hiện bất thường)"],
  "Slide 11 (Page 7): Sentiment analysis: Analyze the sentiment of customer reviews using a binary classification algorithm."),

S("q14", 7, 2, "Để xác định các nhóm khách hàng có hồ sơ tương tự nhau, ta sử dụng thuật toán nào?",
  ["Clustering algorithm (Thuật toán gom cụm)", "Binary classification algorithm", "Regression algorithm", "Matrix factorization algorithm"],
  "Slide 11 (Page 7): Customer segmentation: Identify groups of customers with similar profiles using a clustering algorithm."),

S("q15", 7, 2, "Để dự báo giá vé taxi dựa trên khoảng cách, ta sử dụng thuật toán nào?",
  ["Regression algorithm (Thuật toán hồi quy)", "Clustering algorithm", "Anomaly detection model", "Binary classification algorithm"],
  "Slide 11 (Page 7): Price prediction: Predict taxi fares based on parameters such as distance traveled using a regression algorithm."),

S("q16", 7, 2, "Model Builder và ML.NET CLI sử dụng công nghệ nào để tự động hóa quá trình xây dựng mô hình tốt nhất?",
  ["Automated ML (AutoML)", "Deep Learning", "Reinforcement Learning", "Transfer Learning"],
  "Slide 11 (Page 8): These tools use Automated ML (AutoML), a cutting edge technology that automates the process of building best performing models..."),

M("q17", 7, 2, "ML.NET có thể tiêu thụ (consume) các framework học máy phổ biến nào khác?",
  ["TensorFlow", "ONNX", "Infer.NET", "PyTorch"], 3,
  "Slide 11 (Page 10): ...consume other popular ML frameworks (TensorFlow, ONNX, Infer.NET, and more)..."),

S("q18", 7, 3, "Trong bài kiểm tra hiệu suất với tập dữ liệu đánh giá Amazon 9GB, ML.NET đạt độ chính xác (Accuracy) là bao nhiêu?",
  ["95%", "93%", "92%", "85%"],
  "Slide 11 (Page 12): Using a 9GB Amazon review data set, ML.NET trained a sentiment analysis model with 95% accuracy."),

S("q19", 7, 3, "Theo biểu đồ so sánh Accuracy (AUC), thứ tự xếp hạng từ cao xuống thấp của các framework là:",
  ["ML.NET (93%) > scikit-learn (92%) > H2O (85%)", "scikit-learn (93%) > ML.NET (92%) > H2O (85%)", "H2O (93%) > ML.NET (92%) > scikit-learn (85%)", "ML.NET (95%) > scikit-learn (92%) > H2O (85%)"],
  "Slide 11 (Page 12): Biểu đồ Accuracy (AUC) cho thấy ML.NET đạt 93%, scikit-learn 92%, H2O 85%."),

S("q20", 7, 3, "Theo biểu đồ so sánh thời gian chạy (Runtime: Training + Testing), ML.NET mất bao nhiêu phút?",
  ["11 phút", "66 phút", "105 phút", "60 phút"],
  "Slide 11 (Page 12): Biểu đồ Runtime cho thấy ML.NET mất 11 phút, scikit-learn 66 phút, H2O 105 phút."),

M("q21", 7, 2, "Những sản phẩm/dự án nào của Microsoft sử dụng ML.NET (Trusted and proven at scale)?",
  ["Power BI", "Microsoft Defender", "Outlook", "Bing"], 4,
  "Slide 11 (Page 13): Use the same ML framework used by recognized Microsoft products like Power BI, Microsoft Defender, Outlook, and Bing."),

M("q22", 7, 2, "Những công ty/tổ chức nào sau đây được nhắc đến là đang ứng dụng ML.NET?",
  ["Hunter Medical Research Institute (HMRI)", "SigParser", "Asgard Systems", "endjin"], 4,
  "Slide 11 (Page 13 & 14): Liệt kê các tổ chức: Hunter Medical Research Institute, SigParser, Asgard Systems, endjin, Williams Mullen, Microsoft Defender ATP, AVEVA."),

S("q23", 7, 1, "Bộ dữ liệu mẫu 'Sentiment Labelled Sentences' được tải về từ đâu?",
  ["UCI Machine Learning Repository", "Kaggle", "Github", "Google Dataset Search"],
  "Slide 11 (Page 15): Download the Sentiment Labelled Sentences datasets from the UCI Machine Learning Repository."),

S("q24", 7, 2, "Trong file `yelp_labelled.txt`, cột thứ hai biểu thị điều gì?",
  ["Cảm xúc của văn bản (0 là tiêu cực, 1 là tích cực)", "Độ dài của văn bản", "Số lượng từ trong câu", "Mã ID của người dùng"],
  "Slide 11 (Page 15): ...the second column represents the sentiment of the text (0 is negative, 1 is positive)."),

S("q25", 7, 1, "Để sử dụng ML.NET Model Builder trong Visual Studio, ta cần cài đặt thành phần nào trong 'Installation details'?",
  [".NET desktop development", "ASP.NET and web development", "Python development", "Node.js development"],
  "Slide 11 (Page 18): Trong màn hình cài đặt, chọn '.NET desktop development'."),

S("q26", 7, 2, "Trong bước 1 của bài mẫu, loại project nào được tạo?",
  ["Windows Forms App", "Console App", "WPF App", "ASP.NET Core Web App"],
  "Slide 11 (Page 19): Step 1: Create \"SentimentApp\" with Windows Forms App."),

S("q27", 7, 2, "Trong bước 2, file cấu hình nào được thêm vào project để chứa mô hình học máy?",
  ["SentimentModel.mbconfig", "SentimentModel.json", "SentimentModel.xml", "SentimentModel.config"],
  "Slide 11 (Page 23-24): Add Machine Learning Model... Enter \"SentimentModel.mbconfig\"."),

S("q28", 7, 2, "Trong bước 3 (Pick a scenario), kịch bản nào được chọn cho bài toán phân tích cảm xúc?",
  ["Data classification", "Value prediction", "Image classification", "Recommendation"],
  "Slide 11 (Page 25-26): Select the Data classification scenario, since you're predicting which category a comment falls into."),

S("q29", 7, 2, "Trong bước 4 (Select training environment), môi trường huấn luyện nào được chọn?",
  ["Local (CPU)", "Azure", "Local (GPU)", "Google Colab"],
  "Slide 11 (Page 27): Select training environment -> Local (CPU)."),

S("q30", 7, 2, "Trong bước 5 & 6, cột nào của file dữ liệu được chọn làm 'Column to predict (Label)'?",
  ["col1", "col0", "Label", "Sentiment"],
  "Slide 11 (Page 30): Chọn predict column là `col1`."),

S("q31", 7, 3, "Trong bước 7 (Train model), mô hình tốt nhất đạt được độ chính xác (Best accuracy) là bao nhiêu và sử dụng thuật toán nào?",
  ["81.99% - LbfgsMaximumEntropyMulti", "49.90% - SdcaMaximumEntropyMulti", "93.00% - FastTreeOva", "95.00% - LbfgsLogisticRegressionOva"],
  "Slide 11 (Page 34): Training results -> Best accuracy: 81.99%, Best model: LbfgsMaximumEntropyMulti."),

S("q32", 7, 2, "Trong kết quả huấn luyện, Model Builder đã khám phá (explored) bao nhiêu mô hình?",
  ["19", "10", "2", "5"],
  "Slide 11 (Page 34 & 36): Models explored (total): 19."),

M("q33", 7, 3, "Sau khi huấn luyện xong, những file nào được tự động tạo ra (code-behind) cho `SentimentModel.mbconfig`?",
  ["SentimentModel.zip", "SentimentModel.consumption.cs", "SentimentModel.training.cs", "SentimentModel.predict.cs"], 3,
  "Slide 11 (Page 41): Ba file được tạo: SentimentModel.zip, SentimentModel.consumption.cs, SentimentModel.training.cs."),

S("q34", 7, 2, "File `SentimentModel.zip` chứa nội dung gì?",
  ["Mô hình ML.NET đã được huấn luyện (trained ML.NET model) dưới dạng file zip được tuần tự hóa", "Mã nguồn C# để load model", "Dữ liệu huấn luyện gốc", "Tài liệu hướng dẫn sử dụng mô hình"],
  "Slide 11 (Page 41): SentimentModel.zip: This file is the trained ML.NET model, which is a serialized zip file."),

S("q35", 7, 2, "File `SentimentModel.consumption.cs` chứa nội dung gì?",
  ["Chứa các lớp input/output của mô hình và phương thức Predict() để sử dụng mô hình", "Chứa pipeline huấn luyện (data transforms, algorithm)", "Chứa cấu hình giao diện người dùng", "Chứa dữ liệu đánh giá mô hình"],
  "Slide 11 (Page 41): SentimentModel.consumption.cs: This file contains the model input and output classes and a Predict method that can be used for model consumption."),

S("q36", 7, 2, "File `SentimentModel.training.cs` chứa nội dung gì?",
  ["Chứa pipeline huấn luyện (data transforms, algorithm, và các tham số thuật toán)", "Chứa code giao diện", "Chứa dữ liệu test", "Chứa các chỉ số đánh giá"],
  "Slide 11 (Page 41): SentimentModel.training.cs: This file contains the training pipeline (data transforms, algorithm, and algorithm parameters) used to train the final model."),

S("q37", 7, 3, "Trong bước Evaluate model, khi nhập câu 'Wow... Loved this place.', kết quả dự đoán (Results) trả về là gì?",
  ["Nhãn 1 (Positive) chiếm 74%, Nhãn 0 (Negative) chiếm 26%", "Nhãn 0 (Negative) chiếm 94%, Nhãn 1 (Positive) chiếm 6%", "Nhãn 1 (Positive) chiếm 86.55%, Nhãn 0 (Negative) chiếm 13.45%", "Nhãn 0 (Negative) chiếm 100%"],
  "Slide 11 (Page 39): Hình ảnh cho thấy Results: 1 -> 74%, 0 -> 26%."),

S("q38", 7, 3, "Trong bước Evaluate model, khi nhập câu 'I do not like that place', kết quả dự đoán (Results) trả về là gì?",
  ["Nhãn 0 (Negative) chiếm 94%, Nhãn 1 (Positive) chiếm 6%", "Nhãn 1 (Positive) chiếm 74%, Nhãn 0 (Negative) chiếm 26%", "Nhãn 0 (Negative) chiếm 5.6%, Nhãn 1 (Positive) chiếm 94.4%", "Nhãn 1 (Positive) chiếm 100%"],
  "Slide 11 (Page 40): Hình ảnh cho thấy Results: 0 -> 94%, 1 -> 6%."),

S("q39", 7, 3, "Trong đoạn code Demo GUI của bài mẫu, để kiểm tra xem kết quả dự đoán là Positive hay Negative, ta dựa vào thuộc tính nào?",
  ["result.Prediction", "result.Score[0]", "result.PredictedLabel", "result.Probability"],
  "Slide 11 (Page 45): Code: `if(result.Prediction == 1)` -> Dùng thuộc tính `Prediction`."),

S("q40", 7, 3, "Trong đoạn code Demo GUI, để lấy phần trăm độ tin cậy của Positive và Negative, ta truy cập vào mảng nào?",
  ["result.Score[0] và result.Score[1]", "result.Probability[0] và result.Probability[1]", "result.Prediction[0] và result.Prediction[1]", "result.Confidence[0] và result.Confidence[1]"],
  "Slide 11 (Page 45): `lblPositive.Text = Math.Round(result.Score[0] * 100, 2) + \"%\";` và `lblNegative.Text= Math.Round(result.Score[1] * 100, 2) + \"%\";`."),

// ================= PHẦN 2: TÙY CHỈNH MÔ HÌNH (SLIDE 12) =================
S("q41", 7, 2, "Trong ứng dụng `SentimentAppBinary`, công cụ nào được sử dụng để cập nhật tiến trình xử lý GUI theo thời gian thực (realtime)?",
  ["BackgroundWorker", "Thread", "Task", "Timer"],
  "Slide 12 (Page 2): Use BackgroundWorker to update realtime processing GUI."),

S("q42", 7, 2, "Trong giao diện `SentimentAppBinary`, control nào được dùng để chọn file dữ liệu (dataset)?",
  ["txtDataset và btnPicDataset", "cboModel", "txtTrainRate", "txtInputData"],
  "Slide 12 (Page 6): Hình ảnh chỉ ra `txtDataset` và `btnPicDataset` (Choose DataSet)."),

S("q43", 7, 2, "Để cài đặt thư viện ML.NET vào project `SentimentAppBinary`, ta sử dụng công cụ nào trong Visual Studio?",
  ["NuGet Package Manager", "Solution Explorer", "Server Explorer", "Package Manager Console (chỉ dùng lệnh)"],
  "Slide 12 (Page 4): Right mouse click and choose Manage NuGet Packages."),

S("q44", 7, 2, "Gói NuGet nào cần cài đặt để sử dụng ML.NET?",
  ["Microsoft.ML", "Microsoft.ML.Core", "Microsoft.ML.Data", "Microsoft.ML.Trainers"],
  "Slide 12 (Page 5): Install Microsoft.ML (phiên bản 2.0.1)."),

M("q45", 7, 2, "Trong class `FeedbackData`, những thuộc tính nào được khai báo?",
  ["Data", "Labble", "PredictedLabel", "Probability"], 2,
  "Slide 12 (Page 8): `[LoadColumn(0)] public string Data;` và `[LoadColumn(1), ColumnName(\"Label\")] public bool Labble;` (Lưu ý: slide viết sai chính tả thành 'Labble')."),

S("q46", 7, 3, "Trong class `FeedbackData`, thuộc tính `Labble` được gán tên cột là gì thông qua attribute?",
  ["Label", "Target", "Class", "Sentiment"],
  "Slide 12 (Page 8): `[LoadColumn(1), ColumnName(\"Label\")] public bool Labble;`."),

M("q47", 7, 3, "Trong class `FeedbackSentiment`, những thuộc tính nào được khai báo thêm (kế thừa từ `FeedbackData`)?",
  ["PredictedLabel", "Probability", "Score", "Data"], 2,
  "Slide 12 (Page 9): `[ColumnName(\"PredictedLabel\")] public bool PredictedLabel { get; set; }` và `[ColumnName(\"Probability\")] public float Probability { get; set; }`."),

S("q48", 7, 2, "Trong class `frmMain`, đối tượng nào được sử dụng để khởi tạo môi trường ML.NET?",
  ["MLContext", "IDataView", "ITransformer", "DataOperationsCatalog"],
  "Slide 12 (Page 10): `private MLContext mlContext=new MLContext(42);`."),

S("q49", 7, 2, "Trong class `frmMain`, đối tượng nào lưu trữ dữ liệu đã được tải (dataset)?",
  ["IDataView", "ITransformer", "MLContext", "TrainTestData"],
  "Slide 12 (Page 10): `IDataView dataView;`."),

S("q50", 7, 2, "Trong class `frmMain`, đối tượng nào lưu trữ mô hình đã được huấn luyện?",
  ["ITransformer", "IDataView", "MLContext", "BackgroundWorker"],
  "Slide 12 (Page 10): `private ITransformer model;`."),

S("q51", 7, 3, "Trong sự kiện `btnTrain_Click`, để kích hoạt BackgroundWorker chạy ngầm, ta gọi phương thức nào?",
  ["RunWorkerAsync()", "Start()", "DoWork()", "Run()"],
  "Slide 12 (Page 11): `worker.RunWorkerAsync();`."),

S("q52", 7, 3, "Trong sự kiện `Worker_DoWork`, phương thức nào được dùng để chia tập dữ liệu thành tập Train và Test?",
  ["TrainTestSplit", "SplitData", "TrainTestSplitData", "RandomSplit"],
  "Slide 12 (Page 11): `splitDataView = mContext.Data.TrainTestSplit(dataView, testFraction: testFraction);`."),

S("q53", 7, 3, "Trong sự kiện `Worker_DoWork`, thuật toán nào được sử dụng để huấn luyện mô hình phân loại nhị phân?",
  ["SdacLogisticRegression", "LbfgsMaximumEntropyMulti", "FastTreeOva", "SdcaMaximumEntropyMulti"],
  "Slide 12 (Page 11): `.Append(mContext.BinaryClassification.Trainers.SdacLogisticRegression(...))`."),

S("q54", 7, 3, "Trong sự kiện `Worker_DoWork`, phương thức nào được dùng để chuyển đổi văn bản thành Features?",
  ["FeatureText", "TransformText", "TextToFeatures", "ExtractFeatures"],
  "Slide 12 (Page 11): `mContext.Transforms.Text.FeatureText(outputColumnName: \"Features\", inputColumnName: nameof(FeedbackData.Data))`."),

S("q55", 7, 3, "Trong sự kiện `btnPicDataset_Click`, phương thức nào được dùng để tải dữ liệu từ file text?",
  ["LoadFromTextFile", "LoadData", "ReadTextFile", "ImportData"],
  "Slide 12 (Page 14): `dataView = mContext.Data.LoadFromTextFile<FeedbackData>(openFileDialog1.FileName, hasHeader: false);`."),

S("q56", 7, 3, "Trong sự kiện `btnLoadModel_Click`, phương thức nào được dùng để tải mô hình đã lưu?",
  ["Model.Load", "Model.Read", "Model.Import", "Model.Open"],
  "Slide 12 (Page 14): `model = mContext.Model.Load(modelFileName, out modelSchema);`."),

M("q57", 7, 2, "Trong giao diện `SentimentAppBinary`, những chỉ số đánh giá (metric informations) nào được hiển thị?",
  ["Accuracy", "AUC ROC", "F1-Score", "Log Loss"], 4,
  "Slide 12 (Page 3 & 6): Các chỉ số hiển thị gồm Accuracy, AUC ROC, Log Loss, Negative Precision, Positive Precision, F1-Score, AUC PR, Log Loss Reduction, Negative Recall, Positive Recall."),

// ================= PHẦN 3: TÍCH HỢP MÔ HÌNH (SLIDE 13) =================
S("q58", 7, 2, "Mục tiêu chính của việc tạo Class Library `SentimentModel` là gì?",
  ["Để tái sử dụng (Reuse) mô hình học máy và các lớp dữ liệu cho nhiều dự án khác nhau", "Để tăng tốc độ huấn luyện mô hình", "Để giảm dung lượng của file zip", "Để chuyển đổi mô hình sang Python"],
  "Slide 13 (Page 2): Build the Multi-tier model classes, Export the Machine Learning Model, Reuse the Machine Learning Model, Integrated Machine Learning Model into Existing Project."),

S("q59", 7, 2, "Khi tạo Class Library `SentimentModel`, những class nào được chuyển từ project `SentimentAppBinary` sang?",
  ["FeedbackData và FeedbackSentiment", "frmMain và Program", "MLContext và ITransformer", "BackgroundWorker và OpenFileDialog"],
  "Slide 13 (Page 6): Chuyển `FeedbackData.cs` và `FeedbackSentiment.cs` sang project `SentimentModel`."),

S("q60", 7, 2, "Để project `SentimentAppBinary` có thể sử dụng các class trong `SentimentModel`, ta cần làm gì?",
  ["Thêm Reference (Tham chiếu) đến project `SentimentModel`", "Copy toàn bộ code sang project mới", "Cài đặt lại NuGet package", "Đổi tên project"],
  "Slide 13 (Page 7-9): Right click on SentimentAppBinary -> Add -> Reference... -> checked SentimentModel."),

S("q61", 7, 2, "Sau khi thêm Reference, để sử dụng các class trong `SentimentModel`, ta cần thêm dòng lệnh nào ở đầu file code?",
  ["using SentimentModel;", "using Microsoft.ML;", "using System.Data;", "using SentimentAppBinary;"],
  "Slide 13 (Page 10): Thêm `using SentimentModel;` vào file `frmMain.cs`."),

S("q62", 7, 2, "Trong project `ChiecBungDoiApp`, để sử dụng mô hình đã huấn luyện, ta có cần tạo lại các bước huấn luyện (Train) không?",
  ["Không cần, chỉ cần sử dụng mô hình đã được huấn luyện sẵn (file .zip)", "Có, bắt buộc phải huấn luyện lại từ đầu", "Có, nhưng chỉ cần huấn luyện lại 50% dữ liệu", "Chỉ cần khi chạy trên máy tính khác"],
  "Slide 13 (Page 16): NOTE: ChiecBungDoiApp no need to created any machine learning models, it just only uses the trained models."),

S("q63", 7, 2, "Trong project `ChiecBungDoiApp`, các file mô hình huấn luyện sẵn có định dạng là gì?",
  ["File nén .zip (ví dụ: MLEmotion-16072023-112715.zip)", "File .json", "File .xml", "File .txt"],
  "Slide 13 (Page 11 & 16): Các file mô hình là `MLEmotion-...zip`."),

S("q64", 7, 3, "Trong sự kiện `lvComment_SelectedIndexChanged` của `ChiecBungDoiApp`, để tạo đối tượng dự đoán, ta gọi phương thức nào?",
  ["mContext.Model.CreatePredictionEngine<FeedbackData, FeedbackSentiment>(model)", "mContext.Model.Predict(model)", "mlContext.CreatePredictionEngine(model)", "model.CreatePredictionEngine()"],
  "Slide 13 (Page 22): `PredictionEngine<FeedbackData, FeedbackSentiment> predictionFunction = mContext.Model.CreatePredictionEngine<FeedbackData, FeedbackSentiment>(model);`."),

S("q65", 7, 3, "Trong sự kiện `lvComment_SelectedIndexChanged`, để lấy kết quả dự đoán, ta gọi phương thức nào?",
  ["predictionFunction.Predict(feedback)", "predictionFunction.Run(feedback)", "predictionFunction.Execute(feedback)", "predictionFunction.GetResult(feedback)"],
  "Slide 13 (Page 22): `var resultPrediction = predictionFunction.Predict(feedback);`."),

S("q66", 7, 3, "Trong sự kiện `lvComment_SelectedIndexChanged`, cách tính phần trăm Negative (percentNegative) dựa trên kết quả dự đoán là gì?",
  ["100 - percentPositive", "resultPrediction.Probability * 100", "1 - resultPrediction.Probability", "resultPrediction.Score[1] * 100"],
  "Slide 13 (Page 22): `double percentPositive = Math.Round(resultPrediction.Probability * 100, 2); double percentNegative = Math.Round(100 - percentPositive, 2);`."),

S("q67", 7, 3, "Trong sự kiện `lvComment_SelectedIndexChanged`, điều kiện nào để hiển thị hình ảnh Positive (picPositive)?",
  ["resultPrediction.PredictedLabel == true", "resultPrediction.Probability > 0.5", "resultPrediction.PredictedLabel == 1", "resultPrediction.Score[0] > resultPrediction.Score[1]"],
  "Slide 13 (Page 22): `if (resultPrediction.PredictedLabel == true) { picPositive.Visible = true; picNegative.Visible = false; }`."),

S("q68", 7, 2, "Trong project `ChiecBungDoiApp`, cơ sở dữ liệu được sử dụng có tên là gì?",
  ["DbChiecBungDoiDataContext", "ChiecBungDoiDB", "SentimentDB", "MLDataContext"],
  "Slide 13 (Page 18): `DbChiecBungDoiDataContext context=new DbChiecBungDoiDataContext();`."),

S("q69", 7, 2, "Trong project `ChiecBungDoiApp`, để tải danh sách sản phẩm lên giao diện, ta sử dụng control nào?",
  ["ListView (lvProduct)", "DataGridView", "TreeView", "ListBox"],
  "Slide 13 (Page 17 & 19): `lvProduct` (ListView) được dùng để hiển thị danh sách sản phẩm."),

S("q70", 7, 3, "Trong project `ChiecBungDoiApp`, hàm `LoadModelIntoCombo` lấy danh sách các file mô hình từ thư mục nào?",
  ["Thư mục \"Models\"", "Thư mục \"Data\"", "Thư mục gốc của project", "Thư mục \"bin\\Debug\""],
  "Slide 13 (Page 18 & 19): `string folder = \"Models\";` và hàm `LoadModelIntoCombo` đọc các file trong thư mục này."),
];

module.exports = QUESTIONS_C7;