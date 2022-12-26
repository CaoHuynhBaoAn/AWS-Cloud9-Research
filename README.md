<h1> TÌM HIỂU VỀ AWS CLOUD 9 VÀ VIẾT ỨNG DỤNG MINH HỌA</h1>

<h2>Thành viên</h2>

Phạm Trịnh Tây Nguyên – 20110528 <br/>
Ngô Nguyên Quốc Anh – 20110438 <br/>
Cao Huỳnh Bảo An – 20126087 <br/>

**Tổng quan về AWS Cloud9**
- *Giới thiệu:*

**AWS Cloud9** là môi trường phát triển tích hợp (IDE) dựa trên đám mây cho phép bạn viết, chạy và gỡ lỗi mã chỉ bằng một trình duyệt. Môi trường này bao gồm một trình soạn code, trình gỡ lỗi và thiết bị đầu cuối. **Cloud9** được trang bị sẵn các công cụ thiết yếu cho các ngôn ngữ lập trình phổ biến, bao gồm JavaScript, Python, PHP và nhiều ngôn ngữ khác, nhờ vậy bạn không cần cài đặt tệp hoặc cấu hình máy phát triển để bắt đầu các dự án mới.

- *Cách thức hoạt động:*

Từ sơ đồ (bắt đầu từ dưới cùng), bạn sử dụng **AWS Cloud9 IDE**, chạy trong trình duyệt web trên máy tính cục bộ của bạn, để tương tác với **môi trường AWS Cloud9** của bạn. Tài nguyên điện toán (ví dụ: phiên bản **Amazon EC2** hoặc máy chủ của riêng bạn) kết nối với môi trường đó. Cuối cùng, công việc của bạn được lưu trữ trong **kho lưu trữ AWS CodeCommit** hoặc loại kho lưu trữ từ xa khác.


Các dịch vụ cần chuẩn bị: AWS Cloud9, AWS RDC, AWS Lambda, AWS EC2. 





1. **Tiện ích và chức năng của AWS Cloud9**
- *Những tiện ích mà AWS Cloud9 mang lại:*
- Làm việc với mã trong một số ngôn ngữ lập trình và Bộ phát triển đám mây AWS (CDK).
- Làm việc với mã trong một container docker đang chạy.
- Sử dụng kho mã trực tuyến.
- Hợp tác với những người khác trong thời gian thực.
- Tương tác với các công nghệ cơ sở dữ liệu và trang web khác nhau.
- Nhắm mục tiêu AWS Lambda, Cổng API Amazon và các ứng dụng không có máy chủ AWS.
- Tận dụng các sản phẩm AWS khác như Amazon Lightsail, AWS CodeStar và AWS CodePipeline.
- *Tính năng của AWS Cloud9:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.005.png" alt="aws" />
*Trình chỉnh sửa đầy đủ chức năng:* AWS Cloud9 bao gồm một trình chỉnh sửa dựa trên trình duyệt giúp bạn dễ dàng viết, chạy và gỡ lỗi các dự án của mình. Khi bạn nhập, các đề xuất hoàn thành mã và gợi ý mã sẽ xuất hiện trong trình chỉnh sửa, giúp bạn viết mã nhanh hơn và tránh lỗi



- *Nhiều lựa chọn cấu hình chạy:* AWS Cloud9 hỗ trợ hơn 40 ngôn ngữ lập trình và loại ứng dụng bao gồm JavaScript, Python, PHP, Ruby, Go và C++. Với Cloud9, bạn có thể chọn từ cấu hình chạy mặc định hoặc xác định cấu hình tùy chỉnh bằng cách chỉ định biến môi trường, tên tệp, tùy chọn dòng lệnh,….
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.006.png" alt="aws" />


- *Trình gỡ lỗi tích hợp:* AWS Cloud9 đi kèm với một trình gỡ lỗi tích hợp, cung cấp các chức năng thường được sử dụng như thiết lập điểm ngắt, xem qua mã và kiểm tra các biến của bất kỳ ứng dụng PHP, Python, JS/Node.js, C/C++,..

<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.007.png" alt="aws" />

- *Công cụ tích hợp để phát triển Serverless:* AWS Cloud9 cho phép bạn dễ dàng xây dựng các ứng dụng serverless bằng cách cung cấp trải nghiệm tích hợp để bắt đầu, viết và gỡ lỗi mã ứng dụng serverless. Môi trường phát triển Cloud9 được đóng gói sẵn SDK, công cụ và thư viện cần thiết để phát triển ứng dụng serverless.
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.008.png" alt="aws" />


- *Khả năng kết nối với mọi nền tảng máy chủ Linux:* Bạn có thể linh hoạt chạy các môi trường phát triển AWS Cloud9 trên phiên bản Amazon EC2 Linux được quản lý hoặc bất kỳ máy chủ Linux nào mà bạn đang sử dụng hiện nay. Bạn chỉ có thể chọn tùy chọn kết nối SSH trong quá trình thiết lập Cloud9 khi kết nối với máy chủ Linux của riêng mình. Máy chủ này có thể chạy ở mọi nơi, kể cả AWS, tại chỗ hoặc bất kỳ nhà cung cấp dịch vụ đám mây nào khác.
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.009.png" alt="aws" />
- *Lịch sử sửa đổi tệp:* AWS Cloud9 lưu giữ lịch sử sửa đổi của các tệp trong môi trường phát triển của bạn. Điều này cho phép bạn nhanh chóng truy cập các thay đổi mã đã được thực hiện trong quá khứ và hoàn nguyên về lần lặp lại trước đó.
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.010.png" alt="aws" />

- *Thiết bị đầu cuối tích hợp:* AWS Cloud9 cung cấp một thiết bị đầu cuối có đầy đủ đặc quyền sudo cho phiên bản Amazon EC2 được quản lý của bạn. Nó cho phép bạn chạy các lệnh, chẳng hạn như đẩy các thay đổi mã sang git, biên dịch mã của bạn hoặc hiển thị đầu ra lệnh từ máy chủ của bạn. Giao diện dòng lệnh AWS xác thực trước được cài đặt trong thiết bị đầu cuối của bạn, cho phép bạn dễ dàng kiểm soát và tương tác với các dịch vụ AWS trực tiếp từ dòng lệnh.
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.011.png" alt="aws" />


- *Chuỗi công cụ phân phối liên tục:* AWS Cloud9 tích hợp với AWS CodeStar, cho phép bạn nhanh chóng thiết lập chuỗi công cụ phân phối liên tục từ đầu đến cuối cho ứng dụng của mình và bắt đầu phát hành mã nhanh hơn trên AWS. CodeStar cung cấp trải nghiệm thống nhất cho phép bạn dễ dàng xây dựng, thử nghiệm và triển khai các ứng dụng lên AWS với sự trợ giúp của AWS CodeCommit, AWS CodeBuild, AWS CodePipeline và AWS CodeDeploy.
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.012.png" alt="aws" />


- *Hợp tác chỉnh sửa và trò chuyện:* Cộng tác trong thời gian thực Cloud9 IDE cho phép nhiều nhà phát triển. Điều đó có nghĩa là cho phép lập trình theo cặp và nhóm, điều này cho phép nhau gõ và ghép nối các chương trình với nhau trên cùng một tệp.
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.013.png" alt="aws" />

1. Ưu điểm, nhược điểm của AWS Cloud9 và kết luận.
- Ưu điểm: 
- *Coding chỉ bằng một trình duyệt:* Vì AWS Cloud 9 là một IDE dựa trên đám mây, đồng nghĩa với việc bạn có thể viết, chạy và gỡ lỗi ứng dụng bằng trình duyệt mà không cần cài đặt hay duy trình một IDE cục bộ hay một bộ PC cấu hình cao.
- *Linh hoạt trong việc cấu hình:* Với AWS Cloud 9, bạn có thể thiết lập một cấu hình gần như đủ mạnh để chạy được các dự án về BigData, AI, Blockchain...
- *Code cùng nhau:* AWS Cloud 9 cho phép người dùng chia sẽ quyền truy cập và chỉnh sửa code cùng nhau, trong lúc code người dùng có thể nhìn thấy các thao tác của người khác trong thời gian thực.
- *Bắt đầu dự án mới nhanh chóng:* AWS Cloud 9 giúp bạn dễ dàng bắt đầu các dự án mới thông qua việc cung cấp một bộ các công cụ cho hơn 40 ngôn ngữ lập trình. Với những thuận lợi đó, bạn có thể bắt đầu ngay việc code mà không cần phải nghĩ đến việc cài đặt IDE, môi trường hỗ trợ hay cấu hình các tệp...
- Nhược điểm:
- Với những người dùng miễn phí, cấu hình máy ảo khá khiêm tốn với 2GB HDD, 512 MB RAM, 1 CPU.
- Phụ thuộc vào tốc độ đường truyền mạng.
- Chi phí còn khó tiếp cận với người dùng phổ thông.
- Vì là trình IDE online nên vẫn sẽ có delay trong quá trình lập trình.

- Kết luận:

AWS Cloud 9 là một IDE khá ổn định để lập trình, chạy thử và debug, sử dụng tích hợp với các dịch vụ khác của AWS cũng như là nhưng plugin Git và các extension khác. Tuy nhiên vẫn còn những thiếu sót trong quá trình sử dụng AWS như  cái dịch vụ còn chưa được hỗ trợ, chất lượng đường truyền ở mỗi nơi là mỗi khác nhau. Tóm lại, AWS Cloud 9 là một dịch vụ đáng được sử dụng trong quá trình phát triển trên cloud.



## **PHẦN II. CÀI ĐẶT VÀ CẤU HÌNH DỊCH VỤ AWS CLOUD9** 
### **2.1 Quá trình cài đặt và cấu hình dịch vụ, hướng dẫn chạy chương trình.**
- Quá trình cài đặt:
- *Đăng nhập và AWS và chọn dịch vụ Cloud 9:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.015.png" alt="aws" />

- *Ở màn hình console, chọn Create Environment:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.016.png" alt="aws" />
- *Nhập tên môi trường:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.018.png" alt="aws" />

- *Chọn cấu hình cho IDE:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.019.png" alt="aws" />

- *Review trước khi bắt đầu chạy dịch vụ:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.020.png" alt="aws" />
- *Màn hình khởi động của AWS Cloud 9:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.021.png" alt="aws" />
- *Giao diện khi đã khởi động xong:*
<img src="./IMG/Aspose.Words.f0dd2a35-677f-47a9-999c-7362dee3da0d.022.png" alt="aws" />
- Cấu hình dịch vụ:
- Cài đặt cái package:

Chạy lệnh update:

- sudo apt update (Ubuntu Server)
- sudo yum -y update (Amazon Linux 2 & Amazon Linux)

Chạy lệnh cài đặt PHP:

- sudo amazon-linux-extras install -y php7.2 (Amazon Linux 2)
- sudo yum -y install php72 (Amazon Linux)
- sudo apt install -y php php-xml (Ubuntu Server)
- Hướng dẫn chạy chương trình:
- Mở file index.php và chọn Run 
- Sau đó chọn vào Preview -> chọn Preview Running Application
- Khi cửa sổ được mở ra thì sẽ dẫn đến một URL 
- Thêm vào cuối URL :8080 và chọn vào phần RestroGirls trong trang Index Of/
- Đối với trang admin thì thêm vào phần cuối URL :8080/admin/

Email và Password cho admin là:

- Email:admin@gmail.com
- Password:12345

