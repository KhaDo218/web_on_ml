// ============================================================================
// CHƯƠNG 4: Các nhóm giải thuật máy học (Hồi quy, Phân loại, Gom cụm, Độ đo)
// Soạn dựa trên Slide 06 và 07 của TS. Trần Duy Thanh
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c4-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c4-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });

const QUESTIONS_C4 = [
// ================= 4.1 LINEAR REGRESSION =================
S("q1", 4, 1, "Hồi quy tuyến tính (Linear Regression) thường được ứng dụng trong bài toán nào?",
  ["Dự báo một biến mục tiêu liên tục (giá chứng khoán, nhu cầu thị trường)", "Phân loại email spam hay không spam", "Gom cụm khách hàng dựa trên hành vi", "Điền các giá trị còn thiếu vào bảng dữ liệu"],
  "Slide 06: Hầu hết các bài toán dự báo liên quan tới biến mục tiêu liên tục đều có thể sử dụng hồi quy tuyến tính (dự báo giá, GDP, lạm phát...)."),

S("q2", 4, 2, "Mô hình 'Simple Linear Regression' (Hồi quy tuyến tính đơn biến) có đặc điểm gì?",
  ["Chỉ có MỘT biến độc lập (input feature)", "Có nhiều hơn một biến độc lập", "Không có biến độc lập nào", "Biến mục tiêu là dữ liệu phân loại (nhị phân)"],
  "Slide 06: Simple Linear Regression chỉ có một biến độc lập mô tả mối quan hệ tuyến tính giữa biến phụ thuộc và biến độc lập."),

S("q3", 4, 2, "Phương trình của Simple Linear Regression là gì?",
  ["Y = B0 + B1*X", "Y = B0 * B1 * X", "Y = B1 + B0*X", "Y = B0 + B1*X^2"],
  "Slide 06: Phương trình cơ bản: Y = B0 + B1*X. Trong đó Y là biến phụ thuộc, X là biến độc lập, B0 là hằng số (intercept), B1 là hệ số góc (slope)."),

S("q4", 4, 2, "Trong phương trình hồi quy Y = B0 + B1*X, ý nghĩa của hệ số B1 là gì?",
  ["Sự thay đổi trong Y khi X tăng thêm 1 đơn vị", "Giá trị của Y khi X bằng 0", "Tổng các giá trị của X", "Sai số ngẫu nhiên của mô hình"],
  "Slide 06: B1 giải thích sự thay đổi trong Y với sự thay đổi X bằng một đơn vị. Nói cách khác, nếu tăng X lên 1 đơn vị thì Y sẽ thay đổi một lượng là B1."),

S("q5", 4, 2, "Phương pháp phổ biến để tìm ra đường hồi quy tối ưu trong Linear Regression được gọi là gì?",
  ["Ordinary Least Square (OLS) - Bình phương nhỏ nhất thông thường", "Gradient Descent", "Maximum Likelihood Estimation (MLE)", "Principal Component Analysis (PCA)"],
  "Slide 06: Đường hồi quy tối thiểu hóa tổng của 'Diện tích các sai số' nên đôi khi được gọi là 'Ordinary Least Square (OLS)'."),

S("q6", 4, 3, "Đặc điểm nào sau đây là ĐÚNG về đường hồi quy trong Linear Regression?",
  ["Đường hồi quy luôn đi qua điểm trung bình của biến độc lập X và biến phụ thuộc Y", "Đường hồi quy luôn đi qua gốc tọa độ (0,0)", "Đường hồi quy luôn song song với trục hoành", "Đường hồi quy nối tất cả các điểm dữ liệu lại với nhau"],
  "Slide 06: Đường hồi quy luôn luôn đi qua trung bình của biến độc lập x cũng như trung bình của biến phụ thuộc y."),

S("q7", 4, 3, "Để tính hệ số B1 trong Excel, ngoài hàm CORREL (tương quan) và STDEV (độ lệch chuẩn), công thức tính B1 là gì?",
  ["B1 = Độ tương quan * (Độ lệch chuẩn của Y / Độ lệch chuẩn của X)", "B1 = Độ lệch chuẩn của X / Độ tương quan", "B1 = Độ lệch chuẩn của Y - Độ lệch chuẩn của X", "B1 = Trung bình Y / Trung bình X"],
  "Slide 06: Công thức tính B1: `Độ Tương quan * (Độ lệch chuẩn của y / Độ lệch chuẩn của x)`."),

S("q8", 4, 3, "Để tính hệ số B0 trong Excel, công thức nào sau đây là đúng?",
  ["B0 = Trung bình(Y) - B1 * Trung bình(X)", "B0 = Trung bình(X) - B1 * Trung bình(Y)", "B0 = B1 * Trung bình(X) + Trung bình(Y)", "B0 = Trung bình(Y) / B1"],
  "Slide 06: Công thức tính B0: `Trung bình (Y) - B1 * Trung bình (X)`."),

S("q9", 4, 2, "Khi lắp ráp phương trình Y = B0 + B1*X vào Excel để tính Y-predicted cho từng dòng, ta sử dụng tham chiếu tuyệt đối (dấu $) cho các ô chứa B0 và B1 vì lý do gì?",
  ["Để khi kéo công thức xuống các dòng dưới, B0 và B1 không bị thay đổi vị trí ô", "Để Excel tự động tính toán lại B0 và B1", "Để tránh lỗi chia cho 0", "Để định dạng số có dấu đô la"],
  "Slide 06 (Hình minh họa Excel): Công thức được dùng là `=$E$7+$E$6*A2`. Dấu $ giúp cố định ô chứa B0 (E7) và B1 (E6) khi copy công thức xuống các dòng bên dưới."),

S("q10", 4, 2, "Trong thư viện Scikit-learn (sklearn), class nào được sử dụng để huấn luyện mô hình Linear Regression?",
  ["linear_model.LinearRegression", "linear_model.LogisticRegression", "svm.SVC", "cluster.KMeans"],
  "Slide 06 (Code Python): `from sklearn import linear_model`, sau đó khởi tạo `regr = linear_model.LinearRegression()`."),

S("q11", 4, 3, "Trong đoạn code huấn luyện mô hình sklearn sau: `regr.fit(X, y)`, thuộc tính nào lưu trữ hệ số góc (B1) và thuộc tính nào lưu trữ hằng số (B0)?",
  ["`regr.coef_` lưu B1 và `regr.intercept_` lưu B0", "`regr.coef_` lưu B0 và `regr.intercept_` lưu B1", "`regr.B1_` lưu B1 và `regr.B0_` lưu B0", "`regr.slope` lưu B1 và `regr.bias` lưu B0"],
  "Slide 06: Code in ra `print('Coefficient : ', regr.coef_)` và `print('Interception : ', regr.intercept_)`. Coefficient là hệ số góc, Interception là hằng số."),

// ================= MULTIPLE LINEAR REGRESSION =================
S("q12", 4, 2, "Điểm khác biệt cơ bản giữa Multiple Linear Regression (Hồi quy đa biến) và Simple Linear Regression là gì?",
  ["Multiple Linear Regression có nhiều hơn một biến độc lập", "Multiple Linear Regression không cần tính B0", "Multiple Linear Regression chỉ dùng cho dữ liệu phân loại", "Multiple Linear Regression không sử dụng phương pháp OLS"],
  "Slide 06: Multiple Linear Regression có nhiều hơn một biến độc lập, biểu diễn mối quan hệ tuyến tính giữa các biến độc lập và biến phụ thuộc."),

S("q13", 4, 2, "Công thức tổng quát của Multiple Linear Regression là gì?",
  ["Y = B0 + B1*X1 + B2*X2 + ... + Bn*Xn", "Y = B0 * X1 * X2 * ... * Xn", "Y = B0 + B1*X^2", "Y = B1*X1 + B2*X2"],
  "Slide 06: Công thức chung: Y = B0 + B1*X1 + B2*X2 + B3*X3..."),

S("q14", 4, 3, "Để giải hệ phương trình tìm ma trận hệ số B_hat trong Multiple Linear Regression, công thức toán học nào được sử dụng?",
  ["B_hat = (X'X)^-1 * (X'Y)", "B_hat = (X'Y)^-1 * (X'X)", "B_hat = X * Y", "B_hat = X / Y"],
  "Slide 06 (Ví dụ 3): Cần tính 4 đại lượng: (X'X), (X'X)_inv, (X'Y) và B_hat = (X'X)_inv * (X'Y)."),

S("q15", 4, 3, "Trong Excel, để tính ma trận nghịch đảo của (X'X), ta sử dụng hàm nào?",
  ["MINVERSE", "MMULT", "TRANSPOSE", "INVERSE"],
  "Slide 06 (Ví dụ 3): `(X'X)_inv = MINVERSE(K1:M3)`. Hàm MINVERSE dùng để tính ma trận nghịch đảo."),

S("q16", 4, 3, "Trong Excel, để nhân hai ma trận (X'X)_inv và (X'Y) với nhau, ta sử dụng hàm nào?",
  ["MMULT", "MINVERSE", "TRANSPOSE", "PRODUCT"],
  "Slide 06 (Ví dụ 3): `B_hat = MMULT(K5:M7,K9:K11)`. Hàm MMULT dùng để nhân ma trận."),

S("q17", 4, 3, "Khi tính toán ma trận trong Excel (như MMULT, MINVERSE) cho hồi quy đa biến, ta cần nhấn tổ hợp phím nào để Excel hiểu đó là công thức mảng?",
  ["Ctrl + Shift + Enter", "Ctrl + Enter", "Alt + Enter", "Shift + Enter"],
  "Slide 06 (Ví dụ 3 - Hình minh họa): Ghi chú rõ '(03) Nhấn CTRL+SHIFT+ENTER' để thực thi công thức mảng."),

// ================= 4.2 LOGISTIC REGRESSION =================
S("q18", 4, 1, "Logistic Regression thường được sử dụng để giải quyết các bài toán có kết quả như thế nào?",
  ["Kết quả hữu hạn, thường là 1 trong 2 lựa chọn (Có/Không, Đúng/Sai)", "Kết quả là một giá trị số liên tục (ví dụ: giá nhà)", "Kết quả là một nhóm các cụm không xác định trước", "Kết quả là một chuỗi văn bản dài"],
  "Slide 06: Dự đoán thường cho ra một số kết quả hữu hạn, như có hoặc không. Thường chọn lựa 1 trong 2 thì dùng Logistic Regression."),

M("q19", 4, 2, "Logistic Regression có thể được ứng dụng vào những bài toán phân loại nào sau đây?",
  ["Xác định email Spam hay không Spam", "Xác định khách hàng có được duyệt vay hay không duyệt", "Dự báo giá chứng khoán vào ngày mai", "Xác định dữ liệu tích cực hay tiêu cực"], 3,
  "Slide 06: Các ứng dụng gồm: Xác định tích cực/tiêu cực, Spam/Không Spam, Duyệt vay/Không duyệt, Đầu tư/Không đầu tư, Khách hàng tiềm năng/Không tiềm năng."),

S("q20", 4, 2, "Trong lĩnh vực sản xuất, Logistic Regression được ứng dụng để làm gì?",
  ["Ước tính xác suất xảy ra sự cố ở bộ phận trong máy móc để lên lịch bảo trì", "Dự đoán số lượng sản phẩm bán ra", "Phân loại hình ảnh sản phẩm lỗi", "Tính lương cho công nhân"],
  "Slide 06: Các công ty sản xuất áp dụng phân tích hồi quy logistic để ước tính xác suất xảy ra sự cố ở bộ phận trong máy móc, từ đó lên lịch bảo trì."),

S("q21", 4, 2, "Trong lĩnh vực tiếp thị (Marketing), Logistic Regression được sử dụng để dự đoán điều gì?",
  ["Dự đoán xem người dùng sẽ nhấp vào một quảng cáo hay không", "Dự đoán doanh thu của chiến dịch", "Dự đoán số lượng nhân viên cần tuyển", "Dự đoán màu sắc quảng cáo hiệu quả nhất"],
  "Slide 06: Các công cụ quảng cáo trực tuyến sử dụng mô hình hồi quy logistic để dự đoán xem người dùng sẽ nhấp vào một quảng cáo hay không."),

// ================= 4.3 CLASSIFICATION =================
S("q22", 4, 1, "Classification (Phân loại) là quá trình gì?",
  ["Nhận biết, hiểu và nhóm các đối tượng thành các danh mục đặt trước", "Dự đoán một giá trị số liên tục", "Tìm ra các mẫu hình ẩn mà không có nhãn", "Điền các giá trị còn thiếu vào dữ liệu"],
  "Slide 06: Phân loại là quá trình nhận biết, hiểu và nhóm các ý tưởng và đối tượng thành các danh mục đặt trước."),

S("q23", 4, 2, "Nếu bài toán phân loại chỉ có hai kết quả có thể xảy ra (ví dụ: Nam hoặc Nữ, Spam hoặc Không Spam), nó được gọi là gì?",
  ["Binary Classifier (Phân loại nhị phân)", "Multi-class Classifier (Phân loại đa lớp)", "Clustering (Gom cụm)", "Regression (Hồi quy)"],
  "Slide 06: Binary Classifier là phân loại nhị phân với hai kết quả có thể xảy ra."),

S("q24", 4, 1, "Việc phân loại các loại cây trồng hoặc các loại âm nhạc (có nhiều hơn 2 kết quả) thuộc loại nào?",
  ["Multi-class Classifier (Phân loại nhiều lớp)", "Binary Classifier (Phân loại nhị phân)", "Simple Linear Regression", "K-Means Clustering"],
  "Slide 06: Multi-class Classifier là bài toán phân loại có nhiều hơn hai kết quả."),

M("q25", 4, 2, "Những giải thuật nào sau đây thuộc nhóm 'Linear Models' dùng cho Classification?",
  ["Logistic Regression", "Support Vector Machines (SVM)", "Decision Tree Classification", "Random Forest Classification"], 2,
  "Slide 06: Linear Models gồm: Logistic Regression, Support Vector Machines. Non-linear Models gồm: KNN, Kernel SVM, Naive Bayes, Decision Tree, Random Forest."),

M("q26", 4, 2, "Những giải thuật nào sau đây thuộc nhóm 'Non-linear Models' dùng cho Classification?",
  ["K-Nearest Neighbours (KNN)", "Naïve Bayes", "Decision Tree Classification", "Logistic Regression"], 3,
  "Slide 06: Non-linear Models gồm: KNN, Kernel SVM, Naïve Bayes, Decision Tree Classification, Random Forest Classification. Logistic Regression là Linear Model."),

// ================= 4.4 CLUSTERING: K-MEANS =================
S("q27", 4, 1, "Ý tưởng chính của thuật toán K-Means là gì?",
  ["Phân nhóm các đối tượng vào K cụm sao cho tổng khoảng cách từ các đối tượng đến tâm nhóm là nhỏ nhất", "Phân nhóm dựa trên mật độ các điểm dữ liệu", "Xây dựng một cây phân cấp các cụm", "Dự đoán nhãn cho các điểm dữ liệu mới"],
  "Slide 07: Ý tưởng chính của K-Means là tìm cách phân nhóm các đối tượng đã cho vào K cụm sao cho tổng khoảng cách giữa các đối tượng đến tâm nhóm là nhỏ nhất."),

S("q28", 4, 2, "Trong K-Means, số cụm K thường được xác định như thế nào?",
  ["Là số nguyên dương, thường được xác định trước và lấy ý kiến chuyên gia", "Luôn tự động bằng số lượng dữ liệu", "Luôn bằng 2", "Là một số thực bất kỳ"],
  "Slide 07: Thường K là số cụm được xác định trước và thường lấy ý kiến của chuyên gia, K phải nguyên dương."),

S("q29", 4, 1, "Khoảng cách nào thường được sử dụng để đo khoảng cách giữa các đối tượng trong thuật toán K-Means?",
  ["Khoảng cách Euclid (Euclidean distance)", "Khoảng cách Manhattan", "Khoảng cách Cosine", "Khoảng cách Hamming"],
  "Slide 07: Khoảng cách giữa các đối tượng thường được sử dụng là khoảng cách Euclid."),

S("q30", 4, 2, "Công thức tính khoảng cách Euclid giữa hai điểm p(q1, q2) và p(p1, p2) trong không gian 2 chiều là gì?",
  ["d(p,q) = sqrt((q1-p1)^2 + (q2-p2)^2)", "d(p,q) = |q1-p1| + |q2-p2|", "d(p,q) = (q1-p1)^2 + (q2-p2)^2", "d(p,q) = max(|q1-p1|, |q2-p2|)"],
  "Slide 07 (Hình minh họa): Khoảng cách Euclid được tính bằng căn bậc hai của tổng bình phương các hiệu tọa độ (Định lý Pythagoras)."),

S("q31", 4, 3, "Trong thuật toán K-Means, hàm tiêu chuẩn E cần đạt giá trị gì để quá trình phân cụm là tối ưu?",
  ["Đạt giá trị tối thiểu (Minimize)", "Đạt giá trị tối đa (Maximize)", "Bằng 0", "Không cần quan tâm đến E"],
  "Slide 07: Đầu ra của K-Means là các cụm Ci tách rời và hàm tiêu chuẩn E đạt giá trị tối thiểu. E = tổng bình phương khoảng cách từ các điểm đến tâm cụm."),

M("q32", 4, 2, "Thuật toán K-Means lặp đi lặp lại quá trình nào cho đến khi hội tụ?",
  ["Gán dữ liệu (Assign points) vào tâm gần nhất", "Cập nhật lại vị trí trọng tâm (Recompute centers)", "Tính toán lại ma trận nghịch đảo", "Xóa các điểm nhiễu"], 2,
  "Slide 07: K-Means lặp lại quá trình: Gán dữ liệu -> Cập nhật lại vị trí trọng tâm. Dừng lại khi trọng tâm hội tụ."),

S("q33", 4, 3, "Trong bước cập nhật trọng tâm của K-Means, giá trị mới của tâm cụm thường được tính bằng gì?",
  ["Trung bình cộng (Mean) của tất cả các điểm trong cụm", "Trung vị (Median) của các điểm trong cụm", "Điểm xa nhất trong cụm", "Điểm gần gốc tọa độ nhất"],
  "Slide 07: Bước 3 - Cập nhật lại trọng tâm, ta thường tính giá trị trung bình (Mean) của các điểm trong cụm."),

S("q34", 4, 3, "Điều kiện dừng của thuật toán K-Means là gì?",
  ["Trọng tâm của các cụm không còn thay đổi (hội tụ)", "Số vòng lặp đạt 10 lần", "Tất cả các điểm dồn vào 1 cụm", "Hàm tiêu chuẩn E đạt giá trị lớn nhất"],
  "Slide 07: Quá trình lặp dừng lại khi trọng tâm hội tụ (không bị thay đổi so với vòng lặp trước) và mỗi đối tượng là 1 bộ phận của 1 cụm."),

S("q35", 4, 2, "Trong thư viện scikit-learn, class nào được sử dụng để gom cụm bằng K-Means?",
  ["sklearn.cluster.KMeans", "sklearn.linear_model.LinearRegression", "sklearn.svm.SVC", "sklearn.tree.DecisionTreeClassifier"],
  "Slide 07 (Code Python): `from sklearn.cluster import KMeans`, sau đó `kmeans = KMeans(n_clusters=3)`."),

S("q36", 4, 3, "Trong K-Means (sklearn), thuộc tính nào lưu trữ nhãn (cụm) mà thuật toán đã gán cho từng điểm dữ liệu?",
  ["`kmeans.labels_`", "`kmeans.predict_`", "`kmeans.cluster_centers_`", "`kmeans.classes_`"],
  "Slide 07 (Code Python): `mglearn.discrete_scatter(X[:, 0], X[:, 1], kmeans.labels_, markers='o')`. Thuộc tính `labels_` chứa nhãn cụm của từng điểm."),

S("q37", 4, 3, "Trong K-Means (sklearn), thuộc tính nào lưu trữ tọa độ của các tâm cụm?",
  ["`kmeans.cluster_centers_`", "`kmeans.labels_`", "`kmeans.centers_`", "`kmeans.centroids_`"],
  "Slide 07 (Code Python): `mglearn.discrete_scatter(kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1], ...)`."),

S("q38", 4, 2, "Phương pháp Elbow (khuỷu tay) được sử dụng trong K-Means để làm gì?",
  ["Lựa chọn số lượng cụm K phù hợp nhất", "Tính khoảng cách Euclid giữa các điểm", "Tăng tốc độ huấn luyện mô hình", "Xóa các điểm dữ liệu nhiễu"],
  "Slide 07: Phương pháp Elbow giúp lựa chọn được số lượng các cụm phù hợp dựa vào đồ thị trực quan hóa, nhìn vào sự suy giảm của hàm biến dạng và lựa chọn ra điểm khuỷu tay (elbow point)."),

S("q39", 4, 3, "Trong code vẽ đồ thị Elbow, đại lượng nào được tính toán và lưu vào mảng `inertia` để làm cơ sở xác định điểm khuỷu tay?",
  ["Tổng bình phương khoảng cách từ các điểm đến tâm cụm (`model.inertia_`)", "Số lượng điểm trong mỗi cụm", "Thời gian huấn luyện mô hình", "Hệ số B1 của mô hình"],
  "Slide 07 (Code Python): `inertia.append(model.inertia_)`. `inertia_` chính là tổng bình phương khoảng cách (Cluster sum of squared distances)."),

S("q40", 4, 3, "Khi huấn luyện K-Means trong sklearn, để đảm bảo kết quả phân cụm là nhất quán (không thay đổi giữa các lần chạy), ta cần set tham số nào?",
  ["`random_state=42`", "`max_iter=500`", "`init='k-means++'`", "`n_clusters=3`"],
  "Slide 07 (Code Python): `random_state=42` được set để dùng cùng 1 phân bố dữ liệu cho mỗi lần chạy, đảm bảo nhất quán."),

S("q41", 4, 3, "Tham số `init='k-means++'` trong sklearn KMeans có tác dụng gì?",
  ["Cải thiện cách khởi tạo tâm cụm để tránh rơi vào cực trị địa phương", "Khởi tạo ngẫu nhiên hoàn toàn các tâm cụm", "Tự động chọn số cụm K", "Tăng số vòng lặp tối đa"],
  "Slide 07: `init='k-means++'` là thuật toán khởi tạo tâm cụm thông minh, giúp hội tụ nhanh và tốt hơn so với khởi tạo ngẫu nhiên."),

M("q42", 4, 3, "Những điểm yếu (Limitations) nào sau đây là của thuật toán K-Means?",
  ["Phải xác định trước số cụm K", "Nhạy cảm với nhiễu và điểm ngoại lai (outliers)", "Không phù hợp với các cụm có hình dạng phức tạp (không phải hình cầu)", "Không thể xử lý dữ liệu có số chiều lớn hơn 2"], 3,
  "Slide 07: K-Means cần biết trước K, nhạy cảm với outliers (vì dùng Mean) và chỉ hiệu quả với cụm hình cầu, mật độ tương đối đồng đều."),

// ================= 4.5 COMPLETION =================
S("q43", 4, 1, "Bài toán Completion là gì?",
  ["Điền những giá trị còn thiếu của một điểm dữ liệu dựa trên mối tương quan giữa các điểm dữ liệu", "Xóa các điểm dữ liệu bị lỗi", "Dự báo một giá trị số liên tục", "Phân loại dữ liệu thành các nhóm"],
  "Slide 07: Completion là bài toán điền những giá trị còn thiếu. Nhiệm vụ là dựa trên mối tương quan giữa các điểm dữ liệu để dự đoán những giá trị còn thiếu."),

M("q44", 4, 2, "Bài toán Completion có thể ứng dụng trong những hệ thống nào sau đây?",
  ["Hệ thống khuyến nghị (Recommendation System)", "Gợi ý tìm kiếm", "Gợi ý mã lệnh", "Dự báo thời tiết"], 3,
  "Slide 07: Ví dụ như hệ thống khuyến nghị, gợi ý tìm kiếm, gợi ý mã lệnh, gợi ý trong kinh tế, tài chính... Ta có thể dùng các ý tưởng của Completion."),

// ================= 4.6 CÁC NHÓM KHÁC & 4.7 ĐỘ ĐO =================
M("q45", 4, 2, "Những nhóm giải thuật máy học nào khác được liệt kê trong slide (ngoài Hồi quy, Phân loại, Gom cụm, Completion)?",
  ["Image Classification (Phân loại hình ảnh)", "Recommendation (Gợi ý)", "Object detection (Phát hiện đối tượng)", "Sorting Algorithm (Thuật toán sắp xếp)"], 3,
  "Slide 07: Nhóm giải thuật khác gồm: Image Classification, Recommendation, Object detection, Anomaly detection, Forecasting, Mobile Machine Learning."),

S("q46", 4, 1, "Chỉ số MAE (Mean Absolute Error) đo lường điều gì?",
  ["Sự khác biệt (độ chênh lệch tuyệt đối) trung bình giữa giá trị dự đoán và giá trị thực tế", "Bình phương trung bình của sai số", "Căn bậc hai của trung bình bình phương sai số", "Tỷ lệ dự đoán đúng"],
  "Slide 07: MAE là phương pháp đo lường sự khác biệt (độ chênh lệch giá trị) giữa hai biến liên tục (dự đoán và thực tế)."),

S("q47", 4, 2, "Công thức tính MAE là gì?",
  ["(1/n) * Tổng |yi - y_hat_i|", "(1/n) * Tổng (yi - y_hat_i)^2", "sqrt((1/n) * Tổng (yi - y_hat_i)^2)", "Tổng (yi - y_hat_i) / n"],
  "Slide 07: Công thức MAE = (1/n) * Σ |yi - y_hat_i|."),

S("q48", 4, 2, "Chỉ số MSE (Mean Squared Error) được định nghĩa là gì?",
  ["Giá trị trung bình của bình phương sai số giữa dự đoán và thực tế", "Giá trị trung bình của sai số tuyệt đối", "Căn bậc hai của tổng sai số", "Tỷ lệ phần trăm dự đoán chính xác"],
  "Slide 07: MSE là giá trị trung bình của bình phương sai số (Hàm mất mát), là sự khác biệt giữa các giá trị được mô hình dự đoán và giá trị thực."),

S("q49", 4, 2, "Công thức tính MSE là gì?",
  ["(1/n) * Tổng (yi - y_hat_i)^2", "(1/n) * Tổng |yi - y_hat_i|", "sqrt((1/n) * Tổng (yi - y_hat_i)^2)", "(1/n) * Tổng (yi - y_hat_i)"],
  "Slide 07: Công thức MSE = (1/n) * Σ (yi - y_hat_i)^2."),

S("q50", 4, 2, "Chỉ số RMSE (Root Mean Squared Error) có quan hệ như thế nào với MSE?",
  ["RMSE là căn bậc hai của MSE", "RMSE là bình phương của MSE", "RMSE là nghịch đảo của MSE", "RMSE và MSE hoàn toàn giống nhau"],
  "Slide 07: RMSE là căn bậc hai của giá trị trung bình của các sai số bình phương (MSE)."),

S("q51", 4, 3, "Tại sao RMSE thường được sử dụng thay vì MSE khi đánh giá mô hình hồi quy?",
  ["Vì RMSE có cùng đơn vị đo với biến mục tiêu, giúp dễ diễn giải sai số hơn", "Vì RMSE luôn nhỏ hơn MSE", "Vì RMSE không bị ảnh hưởng bởi các điểm ngoại lai", "Vì RMSE dễ tính toán hơn"],
  "Slide 07: RMSE thường được dùng để xác định giá trị chênh lệch trung bình giữa giá dự đoán và giá trị test ban đầu. Vì là căn bậc hai của MSE nên nó cùng đơn vị với dữ liệu gốc."),

// ================= CASE STUDY & THỰC HÀNH =================
S("q52", 4, 3, "Trong case study 'Customer Clustering', câu lệnh SQL nào được dùng để trích xuất 4 cột CustomerId, Age, Annual_Income, Spending_Score từ 2 bảng customer và customer_spend_score?",
  ["SELECT DISTINCT customer.CustomerId, Age, Annual_Income, Spending_Score FROM customer, customer_spend_score WHERE customer.CustomerId=customer_spend_score.CustomerID", "SELECT * FROM customer JOIN customer_spend_score", "SELECT CustomerId, Age, Annual_Income, Spending_Score FROM customer", "SELECT CustomerId, Age FROM customer_spend_score"],
  "Slide 07 (Case Study): Đoạn script SQL sử dụng SELECT DISTINCT và liên kết 2 bảng qua CustomerId."),

S("q53", 4, 3, "Trong code Python của Case Study, hàm `getConnect` nhận vào những tham số nào để kết nối MySQL?",
  ["server, port, database, username, password", "host, user, pass, db_name", "server, database, table, user", "port, host, user, pass"],
  "Slide 07 (Code Python): `def getConnect(server,port,database,username,password):`."),

S("q54", 4, 3, "Hàm `queryDataset` trong Case Study trả về kiểu dữ liệu gì?",
  ["Pandas DataFrame", "Danh sách (List) các dictionary", "Mảng NumPy (Numpy array)", "Chuỗi JSON"],
  "Slide 07 (Code Python): `df=pd.DataFrame(cursor.fetchall())` và `return df`. Hàm trả về DataFrame."),

S("q55", 4, 3, "Trong đồ thị Elbow, trục hoành (x) và trục tung (y) lần lượt biểu diễn điều gì?",
  ["Trục x: Số lượng cụm (Number of Clusters), Trục y: Tổng bình phương khoảng cách (Cluster sum of squared distances)", "Trục x: Tổng bình phương khoảng cách, Trục y: Số lượng cụm", "Trục x: Thời gian huấn luyện, Trục y: Độ chính xác", "Trục x: Số điểm dữ liệu, Trục y: Số cụm"],
  "Slide 07 (Hình đồ thị Elbow): Trục X là Number of Clusters, trục Y là Cluster sum of squared distances."),

S("q56", 4, 3, "Trong Case study Gom cụm khách hàng theo Age và Spending Score, đồ thị Elbow cho thấy điểm khuỷu tay (elbow point) tốt nhất là K bằng bao nhiêu?",
  ["K=4", "K=2", "K=5", "K=6"],
  "Slide 07: Với 2 thuộc tính Age và Spending Score, đồ thị Elbow chỉ ra điểm khuỷu tay tại K=4."),

S("q57", 4, 3, "Trong Case study Gom cụm khách hàng theo Annual Income và Spending Score, đồ thị Elbow cho thấy điểm khuỷu tay tốt nhất là K bằng bao nhiêu?",
  ["K=5", "K=4", "K=6", "K=3"],
  "Slide 07: Với 2 thuộc tính Annual Income và Spending Score, đồ thị Elbow chỉ ra điểm khuỷu tay tại K=5."),

S("q58", 4, 3, "Trong Case study Gom cụm khách hàng theo Age, Annual Income và Spending Score, đồ thị Elbow cho thấy điểm khuỷu tay tốt nhất là K bằng bao nhiêu?",
  ["K=6", "K=4", "K=5", "K=10"],
  "Slide 07: Với 3 thuộc tính, đồ thị Elbow chỉ ra điểm khuỷu tay tại K=6."),

S("q59", 4, 3, "Hàm `visualize3DKmeans` trong Case Study sử dụng thư viện nào để vẽ biểu đồ 3 chiều?",
  ["plotly.express (px)", "matplotlib.pyplot (plt)", "seaborn (sns)", "mglearn"],
  "Slide 07 (Code Python): `import plotly.express as px` và sử dụng `px.scatter_3d`."),

S("q60", 4, 3, "Trong biểu đồ 3D của Plotly, thuộc tính nào giúp hiển thị thông tin chi tiết của một điểm dữ liệu khi di chuột vào?",
  ["hover_data", "tooltip", "data_info", "label_data"],
  "Slide 07 (Code Python): `hover_data=hover_data` được sử dụng để hiển thị chi tiết khi di chuyển chuột vào node."),
];
module.exports = QUESTIONS_C4;