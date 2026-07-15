const situations = [
  {
    id: "chay-mau",
    icon: "🩸",
    title: "Chảy máu",
    group: "Chấn thương",
    description: "Ép cầm máu, băng ép và nhận biết chảy máu nặng.",
    signs: ["Máu chảy nhiều", "Vết thương sâu", "Da tái lạnh", "Choáng váng", "Mạch nhanh yếu"],
    actions: ["Đeo găng hoặc dùng khăn sạch", "Ép trực tiếp lên vết thương", "Nâng cao vùng bị thương nếu có thể", "Gọi 115 nếu máu không ngừng chảy"],
    techniques: ["Ép cầm máu", "Băng ép", "Garô khi thật cần thiết"],
    donts: ["Không rửa vết thương đang chảy máu ồ ạt", "Không tháo băng đã thấm máu", "Không đặt garô tùy tiện"],
    emergency: ["Máu phun thành tia", "Nạn nhân lơ mơ", "Vết thương ở cổ, ngực, bụng", "Chảy máu không giảm sau 10 phút ép chặt"]
  },
  {
    id: "hoc-di-vat",
    icon: "🫁",
    title: "Hóc dị vật",
    group: "Đường thở",
    description: "Nhận biết tắc đường thở và thao tác Heimlich đúng lúc.",
    signs: ["Không nói được", "Ôm cổ", "Khó thở", "Tím môi", "Ho yếu", "Mất ý thức"],
    actions: ["Gọi người hỗ trợ", "Khuyến khích ho nếu còn ho mạnh", "Gọi 115 nếu nặng", "Không cố móc họng"],
    techniques: ["Vỗ lưng", "Ấn bụng Heimlich", "CPR nếu ngừng tim"],
    donts: ["Cho uống nước", "Móc họng bừa", "Đập mạnh vào đầu"],
    emergency: ["Người bất tỉnh", "Không thở", "Tím tái", "Dị vật không ra"]
  },
  {
    id: "ngung-tim",
    icon: "❤️",
    title: "Ngừng tim",
    group: "Nguy hiểm nhất",
    description: "Kiểm tra đáp ứng, gọi 115 và ép tim ngoài lồng ngực.",
    signs: ["Không đáp ứng", "Không thở hoặc thở bất thường", "Tím tái", "Không thấy cử động"],
    actions: ["Gọi 115 và nhờ lấy AED", "Đặt nạn nhân nằm ngửa trên nền cứng", "Ép tim ngay giữa ngực", "Tiếp tục cho đến khi có hỗ trợ"],
    techniques: ["CPR người lớn", "CPR trẻ em", "Sử dụng AED"],
    donts: ["Không mất thời gian tìm mạch quá lâu", "Không ép tim trên giường mềm", "Không dừng CPR khi chưa có lý do rõ ràng"],
    emergency: ["Luôn gọi cấp cứu ngay khi nghi ngừng tim"]
  },
  {
    id: "bong",
    icon: "🔥",
    title: "Bỏng",
    group: "Bỏng",
    description: "Làm mát bỏng nước sôi, bỏng dầu, bỏng điện, bỏng hóa chất.",
    signs: ["Da đỏ rát", "Phồng rộp", "Đau nhiều", "Bỏng sâu đổi màu trắng hoặc đen"],
    actions: ["Làm mát dưới nước sạch 15-20 phút", "Tháo trang sức gần vùng bỏng", "Che phủ bằng gạc sạch", "Gọi 115 nếu bỏng rộng hoặc sâu"],
    techniques: ["Rửa bỏng", "Băng phủ vô khuẩn", "Rửa mắt hóa chất"],
    donts: ["Không bôi kem đánh răng", "Không chọc vỡ bóng nước", "Không chườm đá trực tiếp"],
    emergency: ["Bỏng mặt, cổ, sinh dục", "Bỏng điện hoặc hóa chất", "Bỏng rộng hơn lòng bàn tay nạn nhân", "Trẻ nhỏ hoặc người già bị bỏng"]
  },
  {
    id: "dien-giat",
    icon: "⚡",
    title: "Điện giật",
    group: "Nguy hiểm nhất",
    description: "Ngắt nguồn điện an toàn trước khi tiếp cận nạn nhân.",
    signs: ["Bất tỉnh", "Bỏng tại điểm tiếp xúc", "Co giật", "Khó thở", "Đau ngực"],
    actions: ["Ngắt nguồn điện trước", "Không chạm trực tiếp khi điện chưa ngắt", "Gọi 115", "CPR nếu nạn nhân không thở"],
    techniques: ["An toàn hiện trường", "CPR", "Xử trí bỏng điện"],
    donts: ["Không dùng tay kéo nạn nhân khỏi nguồn điện", "Không dội nước vào khu vực có điện", "Không chủ quan dù nạn nhân tỉnh"],
    emergency: ["Bất tỉnh", "Bỏng điện", "Đau ngực", "Khó thở", "Điện cao thế"]
  },
  {
    id: "gay-xuong",
    icon: "🦴",
    title: "Gãy xương",
    group: "Chấn thương",
    description: "Cố định tay, chân, cẳng tay, cẳng chân và hạn chế di chuyển.",
    signs: ["Đau dữ dội", "Sưng bầm", "Biến dạng chi", "Không cử động được", "Có tiếng rắc khi chấn thương"],
    actions: ["Giữ yên vùng bị thương", "Cố định bằng nẹp tạm", "Chườm lạnh qua khăn", "Gọi hỗ trợ nếu gãy hở hoặc đau nhiều"],
    techniques: ["Cố định tay", "Cố định chân", "Cố định cẳng tay", "Cố định cẳng chân"],
    donts: ["Không nắn chỉnh xương", "Không ép nạn nhân đứng dậy", "Không di chuyển nếu nghi chấn thương cột sống"],
    emergency: ["Gãy hở", "Tê mất cảm giác", "Chảy máu nhiều", "Nghi chấn thương cột sống"]
  },
  {
    id: "chan-thuong-dau",
    icon: "🤕",
    title: "Chấn thương đầu",
    group: "Chấn thương",
    description: "Theo dõi dấu hiệu nguy hiểm sau va đập vùng đầu.",
    signs: ["Đau đầu tăng dần", "Nôn", "Lơ mơ", "Co giật", "Chảy máu tai mũi"],
    actions: ["Cho nạn nhân nghỉ yên", "Chườm lạnh vùng sưng", "Theo dõi ý thức", "Gọi 115 nếu có dấu hiệu nặng"],
    techniques: ["Cố định cổ", "Tư thế hồi phục", "Gọi 115"],
    donts: ["Không cho uống rượu thuốc", "Không để nạn nhân ngủ một mình khi có dấu hiệu nặng", "Không lắc mạnh để gọi tỉnh"],
    emergency: ["Bất tỉnh", "Co giật", "Nôn nhiều", "Yếu liệt", "Chảy dịch trong tai mũi"]
  },
  {
    id: "ran-can",
    icon: "🐍",
    title: "Rắn cắn",
    group: "Côn trùng & động vật",
    description: "Giữ yên chi bị cắn và đưa đến cơ sở y tế sớm.",
    signs: ["Vết cắn có dấu răng", "Đau sưng lan nhanh", "Buồn nôn", "Khó thở", "Chảy máu bất thường"],
    actions: ["Giữ nạn nhân nằm yên", "Cố định chi bị cắn thấp hơn tim", "Tháo nhẫn hoặc vòng", "Gọi 115 hoặc đưa đi viện"],
    techniques: ["Cố định chi", "Di chuyển nạn nhân an toàn", "Gọi 115"],
    donts: ["Không rạch hút nọc", "Không chườm đá", "Không garô chặt", "Không uống rượu"],
    emergency: ["Khó thở", "Sưng nhanh", "Chóng mặt", "Rắn độc hoặc không rõ loại rắn"]
  },
  {
    id: "con-trung-dot",
    icon: "🐝",
    title: "Côn trùng đốt",
    group: "Côn trùng & động vật",
    description: "Xử trí ong đốt, dị ứng và phản vệ.",
    signs: ["Đau rát", "Sưng đỏ", "Ngứa", "Nổi mề đay", "Khó thở nếu dị ứng nặng"],
    actions: ["Lấy ngòi ong nếu thấy", "Rửa sạch vùng đốt", "Chườm lạnh", "Theo dõi dấu hiệu dị ứng"],
    techniques: ["Lấy ngòi ong", "Chườm lạnh", "Xử trí phản vệ"],
    donts: ["Không nặn bóp mạnh", "Không gãi nhiều", "Không chủ quan khi khó thở"],
    emergency: ["Khó thở", "Sưng môi lưỡi", "Chóng mặt", "Bị đốt nhiều vị trí"]
  },
  {
    id: "say-nang",
    icon: "☀️",
    title: "Say nắng",
    group: "Nhiệt độ",
    description: "Làm mát nhanh và nhận biết sốc nhiệt.",
    signs: ["Sốt cao", "Da nóng đỏ", "Đau đầu", "Lú lẫn", "Ngất"],
    actions: ["Đưa vào nơi mát", "Nới lỏng quần áo", "Làm mát bằng khăn ướt", "Cho uống nước nếu tỉnh táo"],
    techniques: ["Làm mát cơ thể", "Theo dõi nhịp thở", "Gọi 115"],
    donts: ["Không cho uống nếu lơ mơ", "Không tiếp tục phơi nắng", "Không chườm đá toàn thân quá lâu"],
    emergency: ["Lú lẫn", "Co giật", "Bất tỉnh", "Nhiệt độ rất cao"]
  },
  {
    id: "ha-than-nhiet",
    icon: "🥶",
    title: "Hạ thân nhiệt",
    group: "Nhiệt độ",
    description: "Làm ấm từ từ, giữ khô và theo dõi ý thức.",
    signs: ["Run rẩy", "Da lạnh", "Nói lắp", "Lú lẫn", "Mạch chậm"],
    actions: ["Đưa khỏi môi trường lạnh", "Thay đồ ướt", "Ủ ấm thân mình", "Gọi cấp cứu nếu lơ mơ"],
    techniques: ["Ủ ấm an toàn", "Tư thế hồi phục", "Gọi 115"],
    donts: ["Không xoa bóp mạnh", "Không dùng nước quá nóng", "Không cho uống rượu"],
    emergency: ["Lơ mơ", "Ngừng run nhưng lạnh sâu", "Khó thở", "Bất tỉnh"]
  },
  {
    id: "co-giat",
    icon: "🤢",
    title: "Co giật",
    group: "Khác",
    description: "Bảo vệ đầu, giữ đường thở và không nhét vật vào miệng.",
    signs: ["Co cứng hoặc giật toàn thân", "Mất ý thức", "Sùi bọt mép", "Lú lẫn sau cơn"],
    actions: ["Dọn vật nguy hiểm xung quanh", "Đệm mềm dưới đầu", "Đặt nghiêng sau cơn", "Gọi 115 nếu kéo dài"],
    techniques: ["Tư thế hồi phục", "Theo dõi nhịp thở", "Gọi 115"],
    donts: ["Không ghì chặt tay chân", "Không nhét thìa hoặc tay vào miệng", "Không cho ăn uống khi chưa tỉnh"],
    emergency: ["Cơn kéo dài trên 5 phút", "Co giật lặp lại", "Mang thai", "Chấn thương đầu", "Khó thở sau cơn"]
  },
  {
    id: "dot-quy",
    icon: "😵",
    title: "Đột quỵ",
    group: "Nguy hiểm nhất",
    description: "Nhận biết méo miệng, yếu tay chân, nói khó và gọi cấp cứu.",
    signs: ["Méo miệng", "Yếu hoặc tê một bên", "Nói khó", "Đau đầu dữ dội", "Mất thăng bằng"],
    actions: ["Gọi 115 ngay", "Ghi nhớ thời điểm khởi phát", "Để nạn nhân nằm nghiêng nếu nôn", "Không cho ăn uống"],
    techniques: ["FAST", "Tư thế hồi phục", "Gọi 115"],
    donts: ["Không cạo gió", "Không chích máu đầu ngón tay", "Không tự cho uống thuốc hạ áp"],
    emergency: ["Luôn gọi cấp cứu ngay khi nghi đột quỵ"]
  },
  {
    id: "nhoi-mau-co-tim",
    icon: "💔",
    title: "Nhồi máu cơ tim",
    group: "Nguy hiểm nhất",
    description: "Đau ngực, khó thở, vã mồ hôi cần gọi cấp cứu sớm.",
    signs: ["Đau tức ngực", "Đau lan tay trái hoặc hàm", "Khó thở", "Vã mồ hôi", "Buồn nôn"],
    actions: ["Gọi 115", "Cho nghỉ ở tư thế dễ thở", "Nới lỏng quần áo", "Chuẩn bị thông tin thuốc đang dùng"],
    techniques: ["Theo dõi nhịp thở", "CPR nếu ngừng tim", "Gọi 115"],
    donts: ["Không tự lái xe đi viện", "Không vận động gắng sức", "Không trì hoãn vì nghĩ là đau dạ dày"],
    emergency: ["Đau ngực kéo dài", "Khó thở", "Ngất", "Ngừng thở"]
  },
  {
    id: "kho-tho",
    icon: "🫁",
    title: "Khó thở",
    group: "Khác",
    description: "Giúp nạn nhân ngồi dễ thở và theo dõi dấu hiệu nặng.",
    signs: ["Thở nhanh", "Nói không thành câu", "Tím môi", "Co kéo lồng ngực", "Lo lắng dữ dội"],
    actions: ["Cho ngồi tư thế dễ thở", "Nới lỏng quần áo", "Hỗ trợ dùng thuốc xịt nếu là người bệnh hen", "Gọi 115 nếu nặng"],
    techniques: ["Tư thế dễ thở", "Theo dõi nhịp thở", "CPR nếu ngừng thở"],
    donts: ["Không ép nằm ngửa", "Không tụ tập đông quanh nạn nhân", "Không cho ăn uống khi khó thở nặng"],
    emergency: ["Tím tái", "Không nói được", "Lơ mơ", "Đau ngực", "Thở yếu dần"]
  },
  {
    id: "ngo-doc",
    icon: "☠️",
    title: "Ngộ độc",
    group: "Ngộ độc",
    description: "Xử trí ngộ độc thực phẩm, hóa chất, thuốc quá liều.",
    signs: ["Buồn nôn", "Đau bụng", "Tiêu chảy", "Lơ mơ", "Khó thở", "Co giật"],
    actions: ["Gọi 115 hoặc trung tâm y tế", "Giữ lại bao bì chất nghi ngờ", "Cho nằm nghiêng nếu nôn", "Theo dõi nhịp thở"],
    techniques: ["Tư thế hồi phục", "Gọi 115", "Theo dõi ý thức"],
    donts: ["Không tự gây nôn", "Không cho uống sữa hoặc nước chanh tùy tiện", "Không bỏ bao bì hóa chất"],
    emergency: ["Uống hóa chất", "Uống thuốc quá liều", "Lơ mơ", "Co giật", "Khó thở"]
  },
  {
    id: "tai-nan-giao-thong",
    icon: "🚲",
    title: "Tai nạn giao thông",
    group: "Chấn thương",
    description: "An toàn hiện trường, gọi cấp cứu và tránh di chuyển sai cách.",
    signs: ["Đau nhiều", "Chảy máu", "Biến dạng chi", "Lơ mơ", "Khó thở"],
    actions: ["Đảm bảo an toàn giao thông", "Gọi 115", "Không tháo mũ bảo hiểm nếu nghi chấn thương cổ", "Cầm máu nếu cần"],
    techniques: ["An toàn hiện trường", "Ép cầm máu", "Cố định cổ"],
    donts: ["Không kéo nạn nhân dậy", "Không tụ tập làm cản trở cứu hộ", "Không cho ăn uống"],
    emergency: ["Bất tỉnh", "Khó thở", "Chảy máu nhiều", "Đau cổ lưng", "Kẹt trong xe"]
  },
  {
    id: "duoi-nuoc",
    icon: "🏊",
    title: "Đuối nước",
    group: "Nguy hiểm nhất",
    description: "Đưa khỏi nước an toàn, kiểm tra thở và CPR nếu cần.",
    signs: ["Ho sặc nước", "Thở yếu", "Tím tái", "Bất tỉnh", "Không thở"],
    actions: ["Gọi hỗ trợ cứu hộ", "Đưa nạn nhân lên bờ an toàn", "Kiểm tra thở", "CPR nếu không thở"],
    techniques: ["Cứu hộ an toàn", "CPR", "Tư thế hồi phục"],
    donts: ["Không dốc ngược nạn nhân để xốc nước", "Không lao xuống cứu nếu không an toàn", "Không trì hoãn CPR"],
    emergency: ["Bất tỉnh", "Không thở", "Tím tái", "Ho nhiều sau đuối nước"]
  },
  {
    id: "sot-cao-co-giat",
    icon: "👶",
    title: "Trẻ sốt cao co giật",
    group: "Trẻ nhỏ",
    description: "Giữ trẻ an toàn, hạ sốt đúng cách và theo dõi sau cơn.",
    signs: ["Sốt cao", "Co giật", "Mắt trợn", "Mất ý thức ngắn", "Ngủ lịm sau cơn"],
    actions: ["Đặt trẻ nằm nghiêng nơi an toàn", "Nới lỏng quần áo", "Lau ấm khi cơn đã qua", "Đưa đi khám nếu lần đầu"],
    techniques: ["Tư thế hồi phục", "Hạ sốt an toàn", "Gọi 115"],
    donts: ["Không nhét vật vào miệng", "Không ghì chặt", "Không đổ thuốc hoặc nước khi đang co giật"],
    emergency: ["Cơn trên 5 phút", "Trẻ dưới 6 tháng", "Co giật lặp lại", "Khó thở", "Tím tái"]
  },
  {
    id: "chay-mau-cam",
    icon: "👃",
    title: "Chảy máu cam",
    group: "Khác",
    description: "Cúi nhẹ người về trước và bóp cánh mũi đúng cách.",
    signs: ["Máu chảy từ mũi", "Nuốt thấy máu", "Choáng nếu mất máu nhiều"],
    actions: ["Cho ngồi thẳng, cúi nhẹ về trước", "Bóp mềm hai cánh mũi 10-15 phút", "Chườm lạnh sống mũi", "Theo dõi lượng máu"],
    techniques: ["Ép cầm máu mũi", "Theo dõi dấu hiệu choáng", "Gọi 115"],
    donts: ["Không ngửa đầu ra sau", "Không nhét giấy quá sâu", "Không xì mũi ngay sau khi máu ngừng"],
    emergency: ["Không ngừng sau 20 phút", "Chảy máu sau chấn thương", "Choáng", "Đang dùng thuốc chống đông"]
  }
];

const extraSituations = [
  ["gay-tay", "Gãy tay", "🦴", "Chấn thương"],
  ["gay-chan", "Gãy chân", "🦴", "Chấn thương"],
  ["bong-gan", "Bong gân", "🦶", "Chấn thương"],
  ["trat-khop", "Trật khớp", "💪", "Chấn thương"],
  ["chan-thuong-cot-song", "Chấn thương cột sống", "🧍", "Chấn thương"],
  ["dut-tay", "Đứt tay", "🩹", "Chấn thương"],
  ["bong-nuoc-soi", "Bỏng nước sôi", "🔥", "Bỏng"],
  ["bong-dau", "Bỏng dầu", "🔥", "Bỏng"],
  ["bong-dien", "Bỏng điện", "⚡", "Bỏng"],
  ["bong-hoa-chat", "Bỏng hóa chất", "🧪", "Bỏng"],
  ["hoc-di-vat-nguoi-lon", "Hóc dị vật người lớn", "🫁", "Đường thở"],
  ["hoc-di-vat-tre-em", "Hóc dị vật trẻ em", "👧", "Đường thở"],
  ["hoc-di-vat-tre-so-sinh", "Hóc dị vật trẻ sơ sinh", "👶", "Đường thở"],
  ["say-nong", "Say nóng", "☀️", "Nhiệt độ"],
  ["ngo-doc-thuc-pham", "Ngộ độc thực phẩm", "🥘", "Ngộ độc"],
  ["uong-hoa-chat", "Uống hóa chất", "🧪", "Ngộ độc"],
  ["uong-thuoc-qua-lieu", "Uống thuốc quá liều", "💊", "Ngộ độc"],
  ["cho-can", "Chó cắn", "🐕", "Côn trùng & động vật"],
  ["meo-cao", "Mèo cào", "🐈", "Côn trùng & động vật"],
  ["ong-dot", "Ong đốt", "🐝", "Côn trùng & động vật"],
  ["sua-dot", "Sứa đốt", "🌊", "Côn trùng & động vật"],
  ["hoc-sua", "Hóc sữa", "🍼", "Trẻ nhỏ"],
  ["nga-dap-dau", "Ngã đập đầu", "🤕", "Trẻ nhỏ"],
  ["ngat-xiu", "Ngất xỉu", "😵", "Khác"],
  ["dong-kinh", "Động kinh", "🤢", "Khác"],
  ["di-ung-phan-ve", "Dị ứng phản vệ", "🚨", "Khác"],
  ["hen-suyen", "Hen suyễn", "🫁", "Khác"]
].map(([id, title, icon, group]) => ({
  id,
  title,
  icon,
  group,
  description: `Hướng dẫn nhận biết và sơ cứu nhanh cho ${title.toLowerCase()}.`,
  signs: ["Đau hoặc khó chịu rõ", "Lo lắng", "Triệu chứng tăng dần", "Có nguy cơ diễn tiến nặng"],
  actions: ["Giữ bình tĩnh", "Đưa nạn nhân khỏi nguy hiểm nếu an toàn", "Theo dõi ý thức và nhịp thở", "Gọi 115 khi có dấu hiệu nặng"],
  techniques: ["Đánh giá hiện trường", "Theo dõi nhịp thở", "Gọi 115"],
  donts: ["Không làm theo mẹo truyền miệng chưa kiểm chứng", "Không cho ăn uống khi nạn nhân lơ mơ", "Không trì hoãn gọi cấp cứu nếu tình trạng nặng"],
  emergency: ["Bất tỉnh", "Khó thở", "Tím tái", "Đau dữ dội", "Tình trạng không cải thiện"]
}));

const allSituations = [...situations, ...extraSituations];

const techniqueGroups = [
  ["CPR", ["Người lớn", "Trẻ em", "Trẻ sơ sinh"]],
  ["Heimlich", ["Người lớn", "Phụ nữ mang thai", "Trẻ em", "Trẻ sơ sinh"]],
  ["Cầm máu", ["Ép cầm máu", "Garô", "Băng ép"]],
  ["Băng bó", ["Băng đầu", "Băng mắt", "Băng bàn tay", "Băng khuỷu tay", "Băng đầu gối", "Băng cổ chân"]],
  ["Cố định gãy xương", ["Tay", "Chân", "Cẳng tay", "Cẳng chân", "Cố định cổ"]],
  ["Hỗ trợ an toàn", ["Tư thế hồi phục", "Di chuyển nạn nhân an toàn", "Sử dụng AED", "Cách gọi 115"]],
  ["Hóa chất và bỏng", ["Rửa bỏng", "Rửa mắt hóa chất"]]
];

const videoMap = {
  "CPR người lớn": "https://www.youtube.com/embed/Plse2FOkV4Q",
  "CPR": "https://www.youtube.com/embed/Plse2FOkV4Q",
  "Sử dụng AED": "https://www.youtube.com/embed/BAWGjNAj_vA",
  "Ấn bụng Heimlich": "https://www.youtube.com/embed/PA9hpOnvtCk",
  "Vỗ lưng": "https://www.youtube.com/embed/PA9hpOnvtCk",
  "Rửa bỏng": "https://www.youtube.com/embed/EIU0aYclw7Q",
  "Ép cầm máu": "https://www.youtube.com/embed/NxO5LvgqZe0"
};

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d");
}

function renderSituationGrid() {
  const grid = document.querySelector("#situationGrid");
  const searchInput = document.querySelector("#searchInput");
  const emptyState = document.querySelector("#emptyState");

  if (!grid || !searchInput || !emptyState) return;

  const render = () => {
    const keyword = normalizeText(searchInput.value.trim());
    const filtered = allSituations.filter((item) => {
      const haystack = normalizeText(`${item.title} ${item.group} ${item.description}`);
      return haystack.includes(keyword);
    });

    grid.innerHTML = filtered.map((item) => `
      <a class="situation-card" href="detail.html?id=${item.id}" aria-label="Xem chi tiết ${item.title}">
        <span class="card-icon">${item.icon}</span>
        <strong>${item.title}</strong>
        <span>${item.group} - ${item.description}</span>
      </a>
    `).join("");

    emptyState.hidden = filtered.length > 0;
  };

  searchInput.addEventListener("input", render);
  render();
}

function renderTechniqueGrid() {
  const grid = document.querySelector("#techniqueGrid");
  if (!grid) return;

  grid.innerHTML = techniqueGroups.map(([title, items]) => `
    <article class="technique-group">
      <h3>${title}</h3>
      <div class="pill-list">
        ${items.map((item) => `<span class="pill">${item}</span>`).join("")}
      </div>
    </article>
  `).join("");
}

function renderDetailPage() {
  const root = document.querySelector("#detailRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "hoc-di-vat";
  const item = allSituations.find((situation) => situation.id === id) || situations[1];
  const firstVideo = videoMap[item.techniques[0]] || videoMap[item.techniques[1]] || "https://www.youtube.com/embed/Plse2FOkV4Q";

  root.innerHTML = `
    <section class="detail-hero">
      <div class="illustration" aria-label="Hình minh họa ${item.title}">${item.icon}</div>
      <div class="detail-title">
        <span class="section-label">${item.group}</span>
        <h1>${item.title}</h1>
        <p>${item.description}</p>
        <div class="warning-box">Ưu tiên an toàn hiện trường. Gọi 115 ngay nếu nạn nhân bất tỉnh, không thở, tím tái hoặc tình trạng diễn biến nặng.</div>
      </div>
    </section>

    <section class="detail-grid">
      <article class="detail-panel">
        <h2>Dấu hiệu nhận biết</h2>
        <ul>${item.signs.map((sign) => `<li>${sign}</li>`).join("")}</ul>
      </article>
      <article class="detail-panel">
        <h2>Cần làm gì ngay?</h2>
        <ol>${item.actions.map((action) => `<li>${action}</li>`).join("")}</ol>
      </article>
      <article class="detail-panel">
        <h2>Những điều không được làm</h2>
        <ul class="danger-list">${item.donts.map((dont) => `<li>❌ ${dont}</li>`).join("")}</ul>
      </article>
      <article class="detail-panel">
        <h2>Khi nào phải gọi cấp cứu?</h2>
        <ul>${item.emergency.map((reason) => `<li>${reason}</li>`).join("")}</ul>
      </article>
      <article class="detail-panel video-panel">
        <h2>Các kỹ thuật sơ cứu</h2>
        <div class="tech-buttons">
          ${item.techniques.map((technique, index) => `
            <button class="tech-button ${index === 0 ? "active" : ""}" type="button" data-video="${videoMap[technique] || firstVideo}">
              ${technique}
            </button>
          `).join("")}
        </div>
        <iframe id="videoFrame" class="video-frame" src="${firstVideo}" title="Video hướng dẫn sơ cứu" allowfullscreen></iframe>
      </article>
    </section>
  `;

  const buttons = root.querySelectorAll(".tech-button");
  const frame = root.querySelector("#videoFrame");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((itemButton) => itemButton.classList.remove("active"));
      button.classList.add("active");
      frame.src = button.dataset.video;
    });
  });
}

renderSituationGrid();
renderTechniqueGrid();
renderDetailPage();
