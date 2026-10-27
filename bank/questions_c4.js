// ============================================================================
// CHƯƠNG 4: Các nhóm giải thuật máy học (Hồi quy, Phân loại, Gom cụm, Độ đo)
// Nguồn: Slide 06, 07 và Kmean_1
// Quy ước: Đáp án đúng luôn đặt ở ĐẦU mảng options (correct = [0]).
// C(code) tạo khối code nhiều dòng.
// ============================================================================
const S = (id, chapter, difficulty, question, options, explanation) =>
  ({ id: "c4-" + id, chapter, difficulty, type: "single", question, options, correct: [0], explanation });
const M = (id, chapter, difficulty, question, options, nCorrect, explanation) =>
  ({ id: "c4-" + id, chapter, difficulty, type: "multiple", question: question + " (chọn nhiều đáp án)", options,
     correct: Array.from({ length: nCorrect }, (_, i) => i), explanation });
const C = (code) => "\n```\n" + code + "\n```\n";

const QUESTIONS_C4 = [
// ================= 4.1 LINEAR REGRESSION =================
S("q1", 4, 1, "Hồi quy tuyến tính (Linear Regression) phù hợp với loại bài toán nào?",
  ["Dự báo biến mục tiêu liên tục như nhu cầu thị trường, giá chứng khoán, lạm phát, tăng trưởng GDP", "Phân loại email spam", "Gom nhóm khách hàng không có nhãn", "Dịch văn bản"],
  "Hầu hết bài toán dự báo với biến mục tiêu liên tục đều có thể dùng hồi quy tuyến tính."),

S("q2", 4, 1, "Simple Linear Regression có đặc điểm gì?",
  ["Chỉ có một biến độc lập (input feature) mô tả quan hệ tuyến tính với biến phụ thuộc (output target)", "Có nhiều biến độc lập", "Dùng cho biến mục tiêu nhị phân", "Không cần biến phụ thuộc"],
  "Multiple Linear Regression có nhiều hơn một biến độc lập."),

S("q3", 4, 1, "Phương trình của Simple Linear Regression là gì?",
  ["Y = B0 + B1*X", "Y = B0 * B1 + X", "Y = B1 / X + B0", "Y = 1 / (1 + e^-X)"],
  "Y: biến phụ thuộc; X: biến độc lập; B0: hằng số; B1: hệ số quan hệ giữa X và Y."),

S("q4", 4, 2, "Trong phương trình Y = B0 + B1*X, hệ số B1 cho biết điều gì?",
  ["Mức thay đổi của Y khi X tăng một đơn vị", "Giá trị của Y khi X tăng gấp đôi", "Sai số của mô hình", "Giá trị trung bình của Y"],
  "B0 là giá trị của Y khi X = 0 (hằng số)."),

S("q5", 4, 2, "Vì sao đường hồi quy tuyến tính còn được gọi là Ordinary Least Square (OLS)?",
  ["Vì đường hồi quy tối thiểu hóa tổng bình phương các sai số", "Vì đường hồi quy luôn đi qua gốc tọa độ", "Vì nó dùng số mẫu ít nhất", "Vì nó tối đa hóa độ tương quan"],
  "Tổng 'diện tích các sai số' (bình phương sai số) được tối thiểu hóa."),

S("q6", 4, 2, "Phát biểu nào ĐÚNG về đường hồi quy tuyến tính đơn biến?",
  ["Luôn đi qua điểm (trung bình của x, trung bình của y)", "Luôn đi qua gốc tọa độ (0, 0)", "Luôn đi qua điểm dữ liệu đầu tiên", "Luôn nằm ngang"],
  "Vì B0 = mean(Y) - B1*mean(X) nên khi X = mean(X) thì Y = mean(Y)."),

M("q61", 4, 2, "Để tính B0, B1 cho Simple Linear Regression bằng công thức thống kê, cần tính những đại lượng nào?",
  ["Độ lệch chuẩn của x và của y", "Trung bình của x và của y", "Hệ số tương quan giữa x và y", "Ma trận nghịch đảo (X'X)^-1"], 3,
  "Ma trận nghịch đảo dùng cho hồi quy đa biến."),

M("q62", 4, 1, "Hồi quy tuyến tính có thể được triển khai bằng những cách nào?",
  ["Excel", "Python (numpy, sklearn)", "C#, Java, R, MATLAB", "Chỉ có thể làm bằng tay"], 3,
  "Có thể dùng thư viện hoặc tự thực hiện theo công thức toán học."),

S("q7", 4, 2, "Trong Excel, x ở A2:A11, y ở B2:B11; E1 = STDEV(x), E2 = STDEV(y), E5 = CORREL(x, y). Công thức tính B1 là gì?",
  ["=E5*(E2/E1)", "=E5*(E1/E2)", "=E2/E1", "=E5/E1"],
  "B1 = Tương quan * (Độ lệch chuẩn y / Độ lệch chuẩn x)."),

S("q8", 4, 2, "Trong Excel, E3 = AVERAGE(x), E4 = AVERAGE(y), E6 = B1. Công thức tính B0 là gì?",
  ["=E4-E6*E3", "=E3-E6*E4", "=E4+E6*E3", "=E6*E3"],
  "B0 = Trung bình(Y) - B1 * Trung bình(X)."),

S("q63", 4, 2, "Hàm Excel nào tính hệ số tương quan giữa hai dãy x và y?",
  ["CORREL", "STDEV", "AVERAGE", "MMULT"],
  "STDEV: độ lệch chuẩn; AVERAGE: trung bình."),

S("q9", 4, 2, "Ô N9 chứa B0 và N10 chứa B1. Khi viết công thức Y-predicted cho dòng 2 rồi kéo xuống các dòng dưới, vì sao phải viết `=$N$9+$N$10*A2`?",
  ["Dấu $ cố định ô B0, B1 khi sao chép công thức, còn A2 thay đổi theo từng dòng", "Để định dạng tiền tệ", "Để Excel tính nhanh hơn", "Để chuyển công thức thành mảng"],
  "Tham chiếu tuyệt đối không bị dịch khi kéo công thức."),

S("q64", 4, 2, "Dữ liệu x = 1..10, y = 2, 4, 3, 6, 9, 12, 13, 15, 18, 20 cho B1 ≈ 2.0848 và B0 ≈ -1.2667. Giá trị dự đoán y khi x = 1 xấp xỉ bao nhiêu?",
  ["0.818", "2.000", "3.351", "-1.267"],
  "Y = -1.2667 + 2.0848 * 1 ≈ 0.818."),

S("q65", 4, 3, "Với mô hình Y = -1.2667 + 2.0848*X, dự đoán y khi x = 11 xấp xỉ bao nhiêu?",
  ["21.67", "20.00", "22.93", "24.17"],
  "-1.2667 + 2.0848 * 11 ≈ 21.67."),

S("q66", 4, 3, "Hàm Python tự tính B0, B1 như sau. Công thức b1 đúng là gì?" + C(`def calculateb1b0(x, y):
    xbar = np.mean(x)
    ybar = np.mean(y)
    x2bar = np.mean(x ** 2)
    xybar = np.mean(x * y)
    b1 = ______
    b0 = ybar - b1 * xbar
    return b1, b0`),
  ["(xbar * ybar - xybar) / (xbar ** 2 - x2bar)", "(xybar - xbar) / (x2bar - ybar)", "xybar / x2bar", "(ybar - xbar) / (x2bar - xbar)"],
  "Tương đương (mean(xy) - mean(x)mean(y)) / (mean(x^2) - mean(x)^2)."),

S("q67", 4, 2, "Trong code Python, vì sao viết `x = np.array([[1,2,3,4,5,6,7,8,9,10]]).T`?",
  ["Chuyển mảng 1 hàng 10 cột thành 10 hàng 1 cột (vector cột) để mỗi dòng là một mẫu", "Để sắp xếp mảng", "Để tính tổng mảng", "Để đổi kiểu dữ liệu sang chuỗi"],
  ".T là phép chuyển vị."),

S("q68", 4, 2, "Hàm showGraph dùng lệnh `plt.axhline(ybar, linestyle='--', linewidth=4, label=\"mean\")`. Lệnh này vẽ gì?",
  ["Đường nằm ngang nét đứt tại giá trị trung bình của y", "Đường hồi quy", "Trục tung", "Các điểm dữ liệu"],
  "plt.plot(x, y, 'r-o') vẽ điểm thực tế, plt.plot(x, y_predicted, 'b-*') vẽ giá trị dự đoán."),

S("q69", 4, 2, "Lệnh `plt.axis([x_min*0.95, x_max*1.05, y_min*0.95, y_max*1.05])` dùng để làm gì?",
  ["Đặt giới hạn trục x và y rộng hơn dữ liệu một chút để đồ thị không sát mép", "Xoay đồ thị", "Thêm chú thích", "Lưu đồ thị"],
  "Thứ tự tham số: [xmin, xmax, ymin, ymax]."),

S("q10", 4, 1, "Trong scikit-learn, lớp nào dùng để huấn luyện mô hình hồi quy tuyến tính?",
  ["linear_model.LinearRegression", "cluster.KMeans", "linear_model.LogisticRegression", "tree.DecisionTreeClassifier"],
  "Import: `from sklearn import linear_model`."),

S("q70", 4, 2, "Trong `regr = linear_model.LinearRegression(fit_intercept=True)`, tham số fit_intercept=True có ý nghĩa gì?",
  ["Mô hình tính cả hệ số chặn (bias, B0)", "Mô hình chỉ tính B0", "Mô hình buộc đường thẳng đi qua gốc tọa độ", "Mô hình chuẩn hóa dữ liệu"],
  "Nếu False thì không tính B0."),

S("q11", 4, 2, "Sau `regr.fit(X, y)`, thuộc tính nào lưu hệ số B1 và thuộc tính nào lưu B0?",
  ["regr.coef_ lưu B1, regr.intercept_ lưu B0", "regr.intercept_ lưu B1, regr.coef_ lưu B0", "regr.weights lưu B1, regr.bias lưu B0", "regr.labels_ lưu B1, regr.cluster_centers_ lưu B0"],
  "Kết quả coef_, intercept_ trùng với B1, B0 tính bằng Excel hoặc công thức."),

S("q71", 4, 1, "Sau khi huấn luyện mô hình sklearn, lệnh nào dự đoán giá nhà trên tập X?",
  ["ypred = regr.predict(X)", "ypred = regr.fit(X)", "ypred = regr.transform(X)", "ypred = regr.score(X)"],
  "predict trả về giá trị dự đoán."),

S("q72", 4, 2, "Lệnh `X = np.concatenate([x], axis=1)` được dùng trước khi huấn luyện sklearn nhằm mục đích gì?",
  ["Tạo ma trận đầu vào X dạng 2 chiều (mỗi cột là một đặc trưng) theo yêu cầu của sklearn", "Nối x và y thành một mảng", "Chuẩn hóa dữ liệu", "Xáo trộn dữ liệu"],
  "sklearn yêu cầu X có dạng (số mẫu, số đặc trưng)."),

// ================= MULTIPLE LINEAR REGRESSION =================
S("q12", 4, 1, "Điểm khác cơ bản giữa Multiple Linear Regression và Simple Linear Regression là gì?",
  ["Multiple có nhiều hơn một biến độc lập; còn nguyên tắc OLS và thuật toán tìm đường hồi quy tương tự nhau", "Multiple dùng cho phân loại", "Multiple không tuân theo OLS", "Multiple không có hệ số chặn"],
  "Về cơ bản không có sự khác biệt về nguyên tắc."),

S("q13", 4, 1, "Công thức tổng quát của Multiple Linear Regression là gì?",
  ["Y = B0 + B1*X1 + B2*X2 + B3*X3 + ...", "Y = B0 * X1 * X2", "Y = B0 + B1*X", "Y = (X1 + X2) / B0"],
  "Bi là các hệ số, Xi là các biến độc lập."),

S("q14", 4, 2, "Công thức ma trận nào dùng để tính vector hệ số B_hat trong hồi quy đa biến?",
  ["B_hat = (X'X)^-1 * (X'Y)", "B_hat = X'Y", "B_hat = (X'X) * Y", "B_hat = X^-1 * Y"],
  "Cần tính lần lượt (X'X), (X'X)_inv, (X'Y), rồi B_hat."),

S("q73", 4, 2, "Khi tính hồi quy đa biến bằng ma trận trong Excel, vì sao phải chèn cột x0 có toàn giá trị 1?",
  ["Để tương ứng với hệ số chặn B0 trong ma trận X", "Để đánh số thứ tự dòng", "Để tránh lỗi chia cho 0", "Để làm cột nhãn"],
  "B_hat thu được gồm B0, B1, B2 ứng với x0, Color, Quality."),

S("q74", 4, 2, "Cột x0, Color, Quality nằm ở E2:G12. Công thức Excel nào tính (X'X)?",
  ["=MMULT(TRANSPOSE(E2:G12),E2:G12)", "=MINVERSE(E2:G12)", "=TRANSPOSE(E2:G12)*E2:G12", "=SUMPRODUCT(E2:G12)"],
  "TRANSPOSE chuyển vị, MMULT nhân ma trận."),

S("q15", 4, 2, "Hàm Excel nào tính ma trận nghịch đảo (X'X)_inv?",
  ["MINVERSE", "MMULT", "TRANSPOSE", "INVERSE"],
  "Ví dụ =MINVERSE(K1:M3)."),

S("q16", 4, 2, "Hàm Excel nào nhân hai ma trận (X'X)_inv và (X'Y)?",
  ["MMULT", "PRODUCT", "SUMPRODUCT", "MULTIPLY"],
  "Ví dụ =MMULT(K5:M7, K9:K11)."),

S("q17", 4, 2, "Sau khi nhập công thức MMULT/MINVERSE và Excel hiện #VALUE!, cần làm gì để có kết quả dạng ma trận?",
  ["Bôi đen vùng kết quả (ví dụ 3x3) rồi nhấn Ctrl+Shift+Enter", "Nhấn Ctrl+Enter", "Nhấn Alt+Enter", "Nhấn F9"],
  "Ctrl+Shift+Enter nhập công thức mảng."),

S("q75", 4, 2, "Hồi quy đa biến Price theo Color, Quality có 3 hệ số (kể cả x0). Ma trận (X'X) có kích thước bao nhiêu?",
  ["3x3", "11x11", "3x11", "2x2"],
  "X có 11 dòng, 3 cột; X'X = (3x11)(11x3) = 3x3. X'Y có kích thước 3x1."),

S("q76", 4, 3, "Mô hình hồi quy dự đoán giá: Price = 1.7514 + 4.8953*Color + 3.7584*Quality. Với Color = 7, Quality = 5, giá dự đoán xấp xỉ bao nhiêu?",
  ["54.81", "65.00", "41.23", "36.27"],
  "1.7514 + 4.8953*7 + 3.7584*5 ≈ 54.81."),

S("q77", 4, 2, "Trong Excel, giá trị thực ở H2 và giá trị dự đoán ở P2. Công thức tính Squared Error cho dòng 2 là gì?",
  ["=POWER(H2-P2,2)", "=SQRT(H2-P2)", "=ABS(H2-P2)", "=H2*P2"],
  "MSE = AVERAGE của cột Squared Error; RMSE = SQRT(MSE)."),

S("q78", 4, 2, "Cột Squared Error nằm ở Q2:Q12, MSE ở Q13. Công thức tính MSE và RMSE là gì?",
  ["MSE: =AVERAGE(Q2:Q12); RMSE: =SQRT(Q13)", "MSE: =SUM(Q2:Q12); RMSE: =Q13/2", "MSE: =SQRT(Q2:Q12); RMSE: =AVERAGE(Q13)", "MSE: =MAX(Q2:Q12); RMSE: =ABS(Q13)"],
  "Ví dụ: MSE ≈ 25.21 thì RMSE ≈ 5.02."),

M("q79", 4, 3, "Khi so sánh Linear Regression và Multiple Regression, những tiêu chí nào được dùng?",
  ["Definition, Equation, Complexity", "Use Cases, Assumptions, Visualization", "Risk of Overfitting, Multicollinearity Concern, Applications", "Font chữ và màu biểu đồ"], 3,
  "Hồi quy đa biến có rủi ro overfitting và đa cộng tuyến cao hơn."),

S("q80", 4, 2, "Hai mô hình hồi quy tuyến tính có thêm thành phần điều chuẩn (regularization) để hạn chế overfitting là gì?",
  ["Ridge regression và Lasso regression", "K-Means và DBSCAN", "Naive Bayes và KNN", "Pointwise và Pairwise"],
  "Đây là hai chủ đề thảo luận mở rộng của Linear Regression."),

// ================= 4.2 LOGISTIC REGRESSION =================
S("q18", 4, 1, "Hồi quy logistic thường cho kết quả dự đoán như thế nào?",
  ["Một số kết quả hữu hạn, thường chọn 1 trong 2 (có/không)", "Giá trị số thực liên tục", "Các cụm dữ liệu không nhãn", "Một chuỗi văn bản"],
  "Dù tên là hồi quy, logistic regression dùng cho phân loại."),

M("q19", 4, 2, "Logistic Regression có thể áp dụng cho những bài toán nào?",
  ["Xác định email spam hay không spam", "Xác định khách hàng được duyệt vay hay không", "Xác định có nên đầu tư dự án, khách hàng tiềm năng hay không", "Dự đoán giá nhà theo diện tích"], 3,
  "Dự đoán giá nhà là hồi quy tuyến tính."),

S("q20", 4, 2, "Trong sản xuất, hồi quy logistic được ứng dụng để làm gì?",
  ["Ước tính xác suất xảy ra sự cố của bộ phận máy móc để lên lịch bảo trì", "Dự báo doanh thu tháng sau", "Phân nhóm sản phẩm", "Thiết kế dây chuyền"],
  "Giúp giảm thiểu sự cố trong tương lai."),

S("q81", 4, 2, "Trong chăm sóc sức khỏe, hồi quy logistic được dùng như thế nào?",
  ["Dự đoán khả năng mắc bệnh, so sánh tác động của tiền sử gia đình hoặc bộ gen lên bệnh tật", "Tính tiền viện phí", "Gom cụm bệnh nhân theo tuổi", "Dịch hồ sơ bệnh án"],
  "Giúp lên kế hoạch điều trị và chăm sóc dự phòng."),

S("q82", 4, 2, "Vì sao bài toán phát hiện gian lận giao dịch phù hợp với hồi quy logistic?",
  ["Vì kết quả là cụ thể (gian lận hoặc không, rủi ro cao hoặc thấp)", "Vì cần dự đoán số tiền giao dịch", "Vì không có dữ liệu lịch sử", "Vì cần gom cụm giao dịch"],
  "Lĩnh vực tài chính còn dùng cho xét duyệt đơn vay, bảo hiểm."),

S("q21", 4, 2, "Trong tiếp thị, công cụ quảng cáo trực tuyến dùng hồi quy logistic để dự đoán điều gì?",
  ["Người dùng có nhấp vào quảng cáo hay không", "Số lượt xem quảng cáo", "Giá thầu quảng cáo", "Nhóm tuổi người xem"],
  "Từ đó phân tích phản ứng với từ ngữ, hình ảnh để tạo quảng cáo hiệu suất cao."),

// ================= 4.3 CLASSIFICATION =================
S("q22", 4, 1, "Phân loại (Classification) là quá trình gì?",
  ["Nhận biết, hiểu và nhóm đối tượng vào các danh mục đặt trước, dựa trên tập dữ liệu huấn luyện đã được phân loại", "Gom dữ liệu không nhãn thành nhóm", "Dự đoán giá trị liên tục", "Điền giá trị thiếu"],
  "Chương trình dùng nhiều thuật toán để phân loại dữ liệu tương lai."),

S("q23", 4, 1, "Bài toán phân loại chỉ có hai kết quả (CÓ/KHÔNG, SPAM/KHÔNG SPAM, CAT/DOG) gọi là gì?",
  ["Binary Classifier", "Multi-class Classifier", "Clustering", "Regression"],
  "Phân loại nhị phân."),

S("q24", 4, 1, "Phân loại các loại cây trồng hoặc thể loại âm nhạc là bài toán gì?",
  ["Multi-class Classifier", "Binary Classifier", "Regression", "Completion"],
  "Nhiều hơn hai kết quả."),

M("q25", 4, 2, "Giải thuật nào thuộc nhóm Linear Models cho Classification?",
  ["Logistic Regression", "Support Vector Machines", "K-Nearest Neighbours", "Random Forest Classification"], 2,
  "KNN, Random Forest thuộc Non-linear Models."),

M("q26", 4, 2, "Giải thuật nào thuộc nhóm Non-linear Models cho Classification?",
  ["K-Nearest Neighbours", "Kernel SVM", "Naive Bayes", "Logistic Regression"], 3,
  "Nhóm phi tuyến còn có Decision Tree Classification, Random Forest Classification."),

// ================= 4.4 CLUSTERING - K-MEANS =================
M("q83", 4, 1, "Những thuật toán gom cụm (Clustering) nào được giới thiệu?",
  ["K-Means", "Agglomerative Clustering", "DBSCAN", "Logistic Regression"], 3,
  "Logistic Regression là thuật toán phân loại."),

S("q27", 4, 1, "Ý tưởng chính của K-Means là gì?",
  ["Phân các đối tượng vào K cụm sao cho tổng khoảng cách từ các đối tượng đến tâm cụm là nhỏ nhất", "Phân loại dữ liệu có nhãn", "Tìm đường thẳng khớp dữ liệu", "Điền giá trị thiếu"],
  "K-Means là thuật toán gom cụm phổ biến."),

S("q28", 4, 1, "Số cụm K trong K-Means được xác định như thế nào?",
  ["Xác định trước, thường theo ý kiến chuyên gia, K nguyên dương (có thể hỗ trợ bằng phương pháp Elbow)", "Thuật toán tự sinh ngẫu nhiên", "Luôn bằng số đặc trưng", "Luôn bằng 2"],
  "Elbow giúp chọn K phù hợp."),

S("q29", 4, 1, "Khoảng cách nào thường dùng trong K-Means?",
  ["Khoảng cách Euclid", "Khoảng cách Hamming", "Khoảng cách Levenshtein", "Độ tương đồng Jaccard"],
  "Euclid còn gọi là khoảng cách Pythagoras."),

S("q30", 4, 2, "Khoảng cách Euclid giữa hai điểm p(p1, p2) và q(q1, q2) tính thế nào?",
  ["sqrt((q1 - p1)^2 + (q2 - p2)^2)", "|q1 - p1| + |q2 - p2|", "(q1 - p1)^2 + (q2 - p2)^2", "max(|q1 - p1|, |q2 - p2|)"],
  "Là độ dài đoạn thẳng nối hai điểm."),

S("q84", 4, 2, "Khoảng cách Euclid giữa hai khách hàng có tọa độ (2, 3) và (5, 7) là bao nhiêu?",
  ["5", "7", "25", "3.5"],
  "sqrt(3^2 + 4^2) = 5."),

S("q31", 4, 2, "Đầu ra của K-Means là các cụm tách rời sao cho hàm tiêu chuẩn E = Σ Σ ||xi - cj||^2 đạt giá trị gì?",
  ["Tối thiểu", "Tối đa", "Bằng 1", "Bằng số cụm K"],
  "cj là trọng tâm của cụm Cj."),

M("q32", 4, 2, "K-Means lặp lại những quá trình nào cho đến khi dừng?",
  ["Gán dữ liệu vào cụm có trọng tâm gần nhất", "Cập nhật lại vị trí trọng tâm", "Chọn lại số cụm K", "Gán nhãn thủ công"], 2,
  "Dừng khi trọng tâm hội tụ và mỗi đối tượng thuộc một cụm."),

S("q85", 4, 2, "Thứ tự các bước của K-Means là gì?",
  ["Khởi tạo K trọng tâm -> Tính khoảng cách và gán cụm -> Cập nhật trọng tâm -> Kiểm tra điều kiện dừng", "Cập nhật trọng tâm -> Khởi tạo -> Gán cụm", "Tính khoảng cách -> Chọn K -> Kết thúc", "Gán nhãn -> Huấn luyện -> Dự đoán"],
  "Nếu trọng tâm thay đổi thì quay lại bước tính khoảng cách."),

S("q33", 4, 2, "Ở bước cập nhật trọng tâm của K-Means, trọng tâm mới thường được tính bằng gì?",
  ["Giá trị trung bình các điểm trong cụm theo từng thuộc tính", "Điểm xa nhất trong cụm", "Trung vị khoảng cách", "Giá trị lớn nhất mỗi thuộc tính"],
  "Ví dụ V1 = ((1+1+0.5+0.5+0.25+0+0)/8, ...)."),

S("q34", 4, 2, "Khi nào K-Means dừng?",
  ["Khi trọng tâm mới không thay đổi so với trọng tâm cũ (phân bố cụm không đổi)", "Khi số vòng lặp bằng K", "Khi mỗi cụm có số phần tử bằng nhau", "Sau đúng một lần lặp"],
  "Ví dụ: U2 và U1 không đổi thì kết thúc."),

S("q86", 4, 3, "Gom cụm 11 dòng dữ liệu (k = 2), chọn r3 và r5 làm trọng tâm ban đầu. Với r1 = (1, 1, 0.5, 0.5, 0, 0, 0, 0.5, 0.25, 0, 0) và V1 = r3 = (0.5, 0.5, 1, 1, 0, 0, 0, 0.33, 0.33, 0, 0), khoảng cách Euclid d(r1, V1) xấp xỉ bao nhiêu?",
  ["1.02", "2.41", "0.50", "1.50"],
  "sqrt(0.25+0.25+0.25+0.25+0.0289+0.0064) ≈ 1.02."),

S("q87", 4, 2, "Một điểm r1 có d(r1, V1) = 1.02 và d(r1, V2) = 2.41. Ở bước gán cụm, r1 thuộc cụm nào?",
  ["C1, vì gần trọng tâm V1 hơn", "C2, vì khoảng cách lớn hơn", "Cả hai cụm", "Không thuộc cụm nào"],
  "Mỗi điểm được gán vào cụm có trọng tâm gần nhất."),

S("q88", 4, 3, "Cụm C1 gồm 8 điểm có giá trị thuộc tính thứ nhất lần lượt 1, 1, 0.5, 0.5, 0.5, 0.25, 0, 0. Thành phần thứ nhất của trọng tâm mới V1 xấp xỉ bao nhiêu?",
  ["0.47", "0.50", "3.75", "0.25"],
  "(1+1+0.5+0.5+0.5+0.25+0+0)/8 = 3.75/8 ≈ 0.47."),

S("q89", 4, 3, "Gom 13 khách hàng thành 3 cụm, trọng tâm ban đầu Daisy (2, 3), Vitor (9, 8), Real (7, 4). Khách hàng Jassor (5, 6) được gán vào cụm của trọng tâm nào ở lần lặp đầu?",
  ["Real", "Daisy", "Vitor", "Không xác định được"],
  "d(Jassor, Daisy) ≈ 4.24; d(Jassor, Vitor) ≈ 4.47; d(Jassor, Real) ≈ 2.83."),

S("q90", 4, 3, "Với trọng tâm ban đầu Daisy (2, 3), Vitor (9, 8), Real (7, 4), khách hàng Ronie (2, 6) được gán vào cụm nào ở lần lặp đầu?",
  ["Daisy", "Real", "Vitor", "Ronie tự thành cụm riêng"],
  "d(Ronie, Daisy) = 3; d(Ronie, Real) ≈ 5.39; d(Ronie, Vitor) ≈ 7.28."),

S("q91", 4, 1, "Thư viện nào cung cấp các hàm minh họa K-Means như `plot_kmeans_algorithm()` và `plot_kmeans_boundaries()`?",
  ["mglearn (cài bằng pip install mglearn)", "seaborn", "plotly", "pandas"],
  "Gọi kèm plt.show() để hiển thị."),

S("q35", 4, 1, "Lớp nào của scikit-learn dùng để gom cụm K-Means?",
  ["sklearn.cluster.KMeans", "sklearn.linear_model.KMeans", "sklearn.neighbors.KMeans", "sklearn.tree.KMeans"],
  "`from sklearn.cluster import KMeans`."),

S("q36", 4, 2, "Sau `kmeans.fit(X)`, thuộc tính nào lưu nhãn cụm của từng điểm?",
  ["kmeans.labels_", "kmeans.cluster_centers_", "kmeans.inertia_", "kmeans.coef_"],
  "labels_ là mảng số hiệu cụm (0, 1, 2...)."),

S("q37", 4, 2, "Sau `kmeans.fit(X)`, thuộc tính nào lưu tọa độ các tâm cụm?",
  ["kmeans.cluster_centers_", "kmeans.labels_", "kmeans.n_clusters", "kmeans.intercept_"],
  "Ví dụ vẽ tâm cụm: kmeans.cluster_centers_[:, 0], kmeans.cluster_centers_[:, 1]."),

S("q92", 4, 2, "Đoạn code sau vẽ gì?" + C(`kmeans = KMeans(n_clusters=3)
kmeans.fit(X)
mglearn.discrete_scatter(X[:, 0], X[:, 1], kmeans.labels_, markers='o')
mglearn.discrete_scatter(kmeans.cluster_centers_[:, 0],
    kmeans.cluster_centers_[:, 1], [0, 1, 2], markers='^', markeredgewidth=2)
plt.show()`),
  ["Các điểm dữ liệu tô màu theo 3 cụm (hình tròn) và 3 tâm cụm (hình tam giác)", "Đồ thị Elbow", "Biểu đồ histogram", "Đường hồi quy"],
  "X[:, 0] là cột thứ nhất, X[:, 1] là cột thứ hai."),

S("q93", 4, 2, "Hàm runKMeans có các dòng sau. `model.fit_predict(X)` trả về gì?" + C(`model = KMeans(n_clusters=cluster, init='k-means++', max_iter=500, random_state=42)
model.fit(X)
labels = model.labels_
centroids = model.cluster_centers_
y_kmeans = model.fit_predict(X)
return y_kmeans, centroids, labels`),
  ["Mảng nhãn cụm của từng điểm sau khi huấn luyện", "Tọa độ các tâm cụm", "Giá trị inertia", "Số cụm tối ưu"],
  "fit_predict = fit rồi trả về nhãn; kết quả tương ứng với labels_."),

S("q40", 4, 2, "Tham số nào giúp KMeans cho kết quả nhất quán giữa các lần chạy?",
  ["random_state=42 (một giá trị cố định bất kỳ)", "max_iter=500", "n_clusters=4", "init='random'"],
  "Cố định hạt giống ngẫu nhiên cho bước khởi tạo."),

S("q41", 4, 2, "Tham số `init='k-means++'` của KMeans có tác dụng gì?",
  ["Chọn trọng tâm ban đầu một cách thông minh (cách xa nhau) giúp hội tụ nhanh và ổn định hơn", "Tăng số cụm lên gấp đôi", "Bỏ qua bước cập nhật trọng tâm", "Chuẩn hóa dữ liệu"],
  "max_iter=500 giới hạn số vòng lặp tối đa."),

S("q94", 4, 1, "Tham số `max_iter=500` của KMeans có ý nghĩa gì?",
  ["Số vòng lặp tối đa của một lần chạy thuật toán", "Số cụm tối đa", "Số điểm dữ liệu tối đa", "Số lần chạy lại với trọng tâm khác"],
  "Thuật toán dừng sớm nếu đã hội tụ."),

M("q42", 4, 3, "Những điểm yếu nào là hạn chế của K-Means?",
  ["Phải xác định trước số cụm K", "Nhạy cảm với trọng tâm khởi tạo và dữ liệu nhiễu, ngoại lai", "Gặp khó khi cụm có hình dạng không lồi hoặc kích thước, mật độ khác nhau", "Không thể chạy trên dữ liệu số"], 3,
  "Giải pháp: Elbow, k-means++, chuẩn hóa dữ liệu, dùng DBSCAN hoặc Agglomerative Clustering."),

// ================= CUSTOMER CLUSTERING CASE STUDY =================
S("q52", 4, 2, "Bảng customer (CustomerId, Age, ...) và customer_spend_score (CustomerId, Annual_Income, Spending_Score). Câu SQL nào lấy 4 cột CustomerId, Age, Annual_Income, Spending_Score cho từng khách hàng?",
  ["select distinct customer.CustomerId, Age, Annual_Income, Spending_Score from customer, customer_spend_score where customer.CustomerId=customer_spend_score.CustomerId", "select * from customer union customer_spend_score", "select CustomerId, Age from customer_spend_score", "select Age, Annual_Income from customer"],
  "Nối hai bảng theo CustomerId."),

S("q95", 4, 2, "Trong file CustomerCluster1.py, thư viện nào được import để vẽ biểu đồ 3D tương tác?",
  ["import plotly.express as px", "import seaborn as sns", "import mglearn", "from flaskext.mysql import MySQL"],
  "Các import khác: Flask, MySQL, pandas, matplotlib, seaborn, KMeans, numpy."),

S("q53", 4, 2, "Hàm getConnect dùng Flask-MySQL nhận những tham số nào?",
  ["server, port, database, username, password", "sql, conn", "df, columns", "X, cluster"],
  "Gán vào app.config['MYSQL_DATABASE_HOST'], ['MYSQL_DATABASE_PORT'], ['MYSQL_DATABASE_DB'], ['MYSQL_DATABASE_USER'], ['MYSQL_DATABASE_PASSWORD']."),

S("q54", 4, 2, "Hàm `queryDataset(conn, sql)` trả về kiểu dữ liệu gì?",
  ["pandas DataFrame", "list các chuỗi", "dict", "numpy array 1 chiều"],
  "df = pd.DataFrame(cursor.fetchall()); return df."),

S("q96", 4, 2, "Sau khi truy vấn, lệnh `df2.columns = ['CustomerId', 'Age', 'Annual Income', 'Spending Score']` dùng để làm gì?",
  ["Đặt tên cho các cột của DataFrame (mặc định là 0, 1, 2, 3)", "Lọc bỏ cột thừa", "Sắp xếp cột", "Tạo cột mới"],
  "Sau đó có thể gọi df2['Age']..."),

S("q97", 4, 1, "Lệnh nào hiển thị 5 dòng đầu của DataFrame df2?",
  ["df2.head()", "df2.describe()", "df2.info(5)", "df2.top()"],
  "head() mặc định lấy 5 dòng."),

S("q98", 4, 2, "Lệnh `df2.describe()` trả về thông tin gì?",
  ["Thống kê mô tả các cột số: count, mean, std, min, 25%, 50%, 75%, max", "Kiểu dữ liệu từng cột", "5 dòng đầu", "Số giá trị null"],
  "Dùng để hiểu phân phối dữ liệu trước khi gom cụm."),

S("q99", 4, 2, "Gọi `showHistogram(df2, df2.columns[1:])` với df2 có cột CustomerId, Age, Annual Income, Spending Score. Histogram được vẽ cho những cột nào?",
  ["Age, Annual Income, Spending Score", "CustomerId, Age, Annual Income", "Chỉ CustomerId", "Cả 4 cột"],
  "columns[1:] bỏ cột đầu tiên CustomerId."),

S("q100", 4, 2, "Trong hàm showHistogram, lệnh `plt.subplot(3, 1, n)` có ý nghĩa gì?",
  ["Chia hình thành lưới 3 hàng 1 cột và vẽ vào ô thứ n", "Vẽ 3 đường trên 1 biểu đồ", "Tạo 31 biểu đồ", "Vẽ histogram 3 lần"],
  "sns.distplot(df[column], bins=32) vẽ histogram trên từng ô."),

S("q38", 4, 1, "Phương pháp Elbow dùng để làm gì trong K-Means?",
  ["Chọn số cụm K phù hợp dựa vào điểm khuỷu tay trên đồ thị suy giảm của hàm biến dạng", "Khởi tạo trọng tâm", "Chuẩn hóa dữ liệu", "Đánh giá độ chính xác phân loại"],
  "Elbow point là nơi đường cong bắt đầu giảm chậm lại."),

S("q39", 4, 2, "Trong hàm elbowMethod, giá trị nào được thêm vào danh sách `inertia` sau mỗi lần huấn luyện với n cụm?",
  ["model.inertia_ (tổng bình phương khoảng cách từ các điểm đến tâm cụm)", "model.labels_", "model.cluster_centers_", "model.n_iter_"],
  "for n in range(1, 11): ... inertia.append(model.inertia_)."),

S("q55", 4, 2, "Trên đồ thị Elbow, trục hoành và trục tung biểu diễn gì?",
  ["Trục x: Number of Clusters; trục y: Cluster sum of squared distances (inertia)", "Trục x: Age; trục y: Spending Score", "Trục x: số vòng lặp; trục y: độ chính xác", "Trục x: CustomerId; trục y: cụm"],
  "Vẽ bằng plt.plot(np.arange(1, 11), inertia, 'o')."),

S("q56", 4, 2, "Gom cụm khách hàng theo Age và Spending Score, đồ thị Elbow có inertia giảm mạnh từ K = 1 đến K = 4, sau đó gần như đi ngang. Nên chọn K bằng bao nhiêu?",
  ["4", "1", "10", "2"],
  "Điểm khuỷu tay là nơi mức giảm của inertia chậm lại rõ rệt."),

S("q57", 4, 3, "Vì sao không chọn K = 10 dù inertia ở K = 10 nhỏ nhất?",
  ["Inertia luôn giảm khi tăng K; K quá lớn làm cụm mất ý nghĩa, nên chọn điểm khuỷu tay cân bằng giữa số cụm và độ chặt", "Vì K = 10 làm thuật toán lỗi", "Vì inertia càng nhỏ càng xấu", "Vì sklearn chỉ hỗ trợ tối đa 6 cụm"],
  "Khi K bằng số điểm dữ liệu, inertia bằng 0 nhưng không có giá trị phân tích."),

S("q58", 4, 2, "Sau khi chạy runKMeans, lệnh `df2[\"cluster\"] = labels` dùng để làm gì?",
  ["Thêm cột cluster vào DataFrame để truy vấn danh sách khách hàng chi tiết theo từng cụm", "Xóa cột cluster", "Đổi tên cột", "Tạo nhãn huấn luyện cho phân loại"],
  "Phục vụ xuất danh sách khách hàng mỗi cụm ra console hoặc web."),

S("q101", 4, 2, "Lệnh `X = df2.loc[:, columns].values` với columns = ['Age', 'Spending Score'] tạo ra gì?",
  ["Mảng numpy chứa giá trị 2 cột Age và Spending Score của mọi dòng", "DataFrame chỉ có dòng đầu", "Danh sách tên cột", "Series cột Age"],
  ".loc[:, columns] chọn mọi dòng và các cột chỉ định; .values chuyển sang numpy."),

S("q102", 4, 3, "Trong visualizeKMeans, đoạn sau vẽ gì?" + C(`for i in range(cluster):
    plt.scatter(X[y_kmeans == i, 0], X[y_kmeans == i, 1],
                s=100, c=colors[i], label='Cluster %i' % (i+1))`),
  ["Vẽ các điểm của từng cụm i với màu riêng và nhãn Cluster 1, Cluster 2...", "Vẽ tâm cụm", "Vẽ đường hồi quy", "Vẽ histogram từng cụm"],
  "X[y_kmeans == i, 0] lấy cột 0 của các điểm thuộc cụm i."),

S("q59", 4, 2, "Hàm visualize3DKmeans dùng hàm nào để vẽ biểu đồ phân cụm 3 chiều?",
  ["px.scatter_3d của plotly.express", "plt.scatter của matplotlib", "sns.lineplot của seaborn", "mglearn.discrete_scatter"],
  "Gom cụm theo 3 thuộc tính Age, Annual Income, Spending Score nên cần biểu đồ 3D."),

S("q60", 4, 2, "Trong `px.scatter_3d(df, x=..., y=..., z=..., color='cluster', hover_data=hover_data, ...)`, tham số hover_data có tác dụng gì?",
  ["Hiển thị chi tiết dữ liệu của điểm khi di chuột vào", "Đổi màu theo cụm", "Đặt tiêu đề trục", "Phóng to biểu đồ"],
  "hover_data = df2.columns để hiển thị đầy đủ các cột."),

S("q103", 4, 2, "Trong px.scatter_3d, tham số `color='cluster'` và `category_orders={\"cluster\": range(0, cluster)}` dùng để làm gì?",
  ["Tô màu điểm theo cột cluster và sắp xếp thứ tự các cụm trong chú thích", "Lọc chỉ cụm 0", "Chuẩn hóa dữ liệu", "Đặt kích thước điểm"],
  "fig.update_layout(margin=dict(l=0, r=0, b=0, t=0)) bỏ lề trước khi fig.show()."),

S("q104", 4, 3, "Tập dữ liệu sakila có các bảng Customer, Inventory, Rental, Film. Khi gom cụm khách hàng theo mức độ quan tâm Film và Inventory, nguyên tắc nào áp dụng cho việc chọn thuộc tính?",
  ["Mỗi người tự đề xuất thuộc tính, miễn bảo vệ được ý tưởng (không có mô hình máy học nào sai)", "Bắt buộc dùng đúng 2 thuộc tính Age và Income", "Chỉ được dùng thuộc tính của bảng Film", "Phải dùng toàn bộ cột của 4 bảng"],
  "Đây là bài tập mở về thiết kế đặc trưng."),

// ================= 4.5 - 4.6 COMPLETION & KHÁC =================
S("q43", 4, 1, "Bài toán Completion là gì?",
  ["Dựa trên mối tương quan giữa các điểm dữ liệu để dự đoán những giá trị còn thiếu", "Xóa dòng dữ liệu thiếu", "Phân loại nhị phân", "Gom cụm dữ liệu"],
  "Lý do: thu thập toàn bộ thông tin một điểm dữ liệu (ví dụ thông tin khách hàng) khó khả thi."),

M("q44", 4, 2, "Ứng dụng nào dùng ý tưởng Completion?",
  ["Hệ thống khuyến nghị", "Gợi ý tìm kiếm", "Gợi ý mã lệnh (code completion)", "Phân tích phương sai"], 3,
  "Còn có gợi ý trong kinh tế, tài chính."),

M("q45", 4, 2, "Những nhóm giải thuật khác nào được nêu ngoài Hồi quy, Phân loại, Gom cụm, Completion?",
  ["Image Classification, Object detection", "Recommendation, Forecasting", "Anomaly detection, Mobile Machine Learning (ML Kit)", "Sắp xếp nổi bọt (Bubble sort)"], 3,
  "Mobile ML có thể dùng Google ML Kit."),

// ================= 4.7 ĐỘ ĐO =================
S("q46", 4, 1, "MAE (Mean Absolute Error) đo lường điều gì?",
  ["Trung bình trị tuyệt đối độ chênh lệch giữa giá trị dự đoán và thực tế của hai biến liên tục", "Tỷ lệ phân loại đúng", "Số cụm tối ưu", "Độ tương quan"],
  "MAE = (1/n) Σ |yi - ŷi|."),

S("q47", 4, 1, "Công thức MAE là gì?",
  ["(1/n) * Σ |yi - ŷi|", "(1/n) * Σ (yi - ŷi)^2", "sqrt((1/n) * Σ (yi - ŷi)^2)", "Σ (yi - ŷi)"],
  "Dùng trị tuyệt đối."),

S("q48", 4, 2, "MSE (Mean Squared Error) được định nghĩa là gì?",
  ["Trung bình của bình phương sai số giữa giá trị dự đoán và giá trị thực (hàm mất mát, hàm rủi ro)", "Căn bậc hai của MAE", "Tổng sai số tuyệt đối", "Sai số lớn nhất"],
  "MSE phổ biến hơn MAE."),

S("q49", 4, 1, "Công thức MSE là gì?",
  ["(1/n) * Σ (yi - ŷi)^2", "(1/n) * Σ |yi - ŷi|", "sqrt(Σ (yi - ŷi))", "Σ (yi - ŷi)^2"],
  "Bình phương sai số rồi lấy trung bình."),

S("q50", 4, 1, "Quan hệ giữa RMSE và MSE là gì?",
  ["RMSE = sqrt(MSE)", "RMSE = MSE^2", "RMSE = MSE / n", "RMSE = 2 * MSE"],
  "Root Mean Squared Error."),

S("q51", 4, 2, "Vì sao RMSE thường được dùng để diễn giải thay vì MSE?",
  ["RMSE có cùng đơn vị với biến mục tiêu nên dễ hiểu là mức chênh lệch trung bình giữa giá dự đoán và giá trị thực", "RMSE luôn nhỏ hơn MAE", "RMSE không phạt sai số lớn", "RMSE không cần giá trị thực"],
  "MSE có đơn vị bình phương."),

S("q105", 4, 2, "Giá trị thực là [3, 5, 2], dự đoán là [2, 5, 4]. MAE và MSE lần lượt bằng bao nhiêu?",
  ["MAE = 1, MSE = 5/3 ≈ 1.67", "MAE = 3, MSE = 5", "MAE = 1.67, MSE = 1", "MAE = 1, MSE = 1"],
  "Sai số: 1, 0, 2. MAE = 3/3 = 1; MSE = (1 + 0 + 4)/3 ≈ 1.67."),

S("q106", 4, 2, "Một mô hình có MSE = 25.21. RMSE xấp xỉ bao nhiêu?",
  ["5.02", "12.61", "635.6", "25.21"],
  "sqrt(25.21) ≈ 5.02."),
];
module.exports = QUESTIONS_C4;
