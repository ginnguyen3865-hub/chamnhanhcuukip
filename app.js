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
].map(([id, title, icon, group]) => {
  if (id === "gay-tay") {
    return {
      id,
      title,
      icon,
      group,
      description: "Nghi gãy tay cần giữ bất động, đỡ tay đúng cách và kiểm tra tuần hoàn sau cố định.",
      signs: ["Đau dữ dội", "Sưng bầm", "Biến dạng cánh tay", "Không cử động được", "Tê hoặc lạnh bàn tay"],
      actions: ["Giữ tay ở tư thế hiện tại", "Đỡ tay bằng khăn tam giác nếu có", "Cố định bằng nẹp đủ dài", "Theo dõi màu và cảm giác đầu ngón tay"],
      techniques: ["Cố định tay", "Cố định cẳng tay", "Cách gọi 115"],
      donts: ["Không nắn chỉnh xương", "Không duỗi thẳng tay", "Không buộc quá chặt làm tê lạnh bàn tay"],
      emergency: ["Tay biến dạng rõ", "Tê mất cảm giác", "Chảy máu nhiều", "Nghi gãy hở"]
    };
  }

  if (id === "gay-chan") {
    return {
      id,
      title,
      icon,
      group,
      description: "Nghi gãy chân cần cố định ngay để tránh xương di lệch thêm và giảm đau khi di chuyển.",
      signs: ["Đau dữ dội", "Sưng nhanh", "Chân biến dạng", "Không chịu lực", "Bàn chân tê lạnh"],
      actions: ["Không cho đứng dậy hoặc đi lại", "Đệm mềm quanh chân", "Cố định bằng nẹp dài", "Kiểm tra mạch và cảm giác ở bàn chân"],
      techniques: ["Cố định chân", "Cố định cẳng chân", "Cách gọi 115"],
      donts: ["Không kéo chân về đúng trục", "Không tự nắn chỉnh xương", "Không để nạn nhân tự đi"],
      emergency: ["Đau tăng sau cố định", "Bàn chân lạnh tím", "Biến dạng rõ", "Nghi gãy đùi"]
    };
  }

  if (id === "chan-thuong-cot-song") {
    return {
      id,
      title,
      icon,
      group,
      description: "Nghi chấn thương cột sống cần giữ đầu cổ thẳng trục và tuyệt đối hạn chế di chuyển.",
      signs: ["Đau cổ hoặc lưng dữ dội", "Tê yếu tay chân", "Không đứng dậy được", "Tai nạn mạnh", "Lú lẫn hoặc bất tỉnh"],
      actions: ["Giữ đầu cổ không di chuyển", "Dùng vật mềm chặn hai bên đầu", "Gọi 115 ngay", "Chỉ di chuyển khi có nguy hiểm tức thời"],
      techniques: ["Cố định cổ", "Di chuyển nạn nhân an toàn", "Cách gọi 115"],
      donts: ["Không ngồi dậy đột ngột", "Không xoay cổ để nhìn nói chuyện", "Không tự tháo mũ bảo hiểm nếu không được huấn luyện"],
      emergency: ["Tê yếu tay chân", "Đau cổ dữ dội", "Tai nạn giao thông mạnh", "Bất tỉnh hoặc khó thở"]
    };
  }

  return {
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
  };
});

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
  "CPR người lớn": "https://www.youtube.com/watch?v=Plse2FOkV4Q",
  "CPR": "https://www.youtube.com/watch?v=Plse2FOkV4Q",
  "Sử dụng AED": "https://www.youtube.com/watch?v=BAWGjNAj_vA",
  "Ấn bụng Heimlich": "https://www.youtube.com/watch?v=PA9hpOnvtCk",
  "Vỗ lưng": "https://www.youtube.com/watch?v=PA9hpOnvtCk",
  "Rửa bỏng": "https://www.youtube.com/watch?v=EIU0aYclw7Q",
  "Ép cầm máu": "https://www.youtube.com/watch?v=NxO5LvgqZe0"
};

const posterAssets = {
  default: "assets/posters/default.svg",
  cpr: "assets/posters/cpr.svg",
  heimlich: "assets/posters/heimlich.svg",
  bleeding: "assets/posters/bleeding.svg",
  burn: "assets/posters/burn.svg",
  aed: "assets/posters/aed.svg",
  fracture: "assets/posters/fracture.svg",
  recovery: "assets/posters/recovery.svg",
  emergency: "assets/posters/emergency-call.svg",
  breathing: "assets/posters/breathing.svg",
  temperature: "assets/posters/temperature.svg",
  poison: "assets/posters/poison.svg",
  animal: "assets/posters/animal-bite.svg",
  safety: "assets/posters/scene-safety.svg",
  water: "assets/posters/water-rescue.svg",
  allergy: "assets/posters/allergy.svg"
};

const situationVideoQueries = {
  "chay-mau": "stop the bleed severe bleeding control first aid",
  "hoc-di-vat": "choking first aid back blows abdominal thrusts",
  "ngung-tim": "hands only CPR official training",
  "bong": "burn first aid cool water official",
  "dien-giat": "electrical injury first aid CPR official",
  "gay-xuong": "fracture immobilization first aid",
  "chan-thuong-dau": "head injury first aid when to call emergency",
  "ran-can": "snake bite first aid official",
  "con-trung-dot": "insect sting first aid allergic reaction",
  "say-nang": "heat stroke first aid official",
  "ha-than-nhiet": "hypothermia first aid official",
  "co-giat": "seizure first aid official",
  "dot-quy": "stroke FAST first aid official",
  "nhoi-mau-co-tim": "heart attack warning signs first aid",
  "kho-tho": "difficulty breathing asthma attack first aid",
  "ngo-doc": "poisoning first aid official",
  "tai-nan-giao-thong": "trauma scene safety first aid",
  "duoi-nuoc": "drowning rescue CPR first aid",
  "sot-cao-co-giat": "febrile seizure first aid children",
  "chay-mau-cam": "nosebleed first aid leaning forward",
  "gay-tay": "arm fracture immobilization first aid",
  "gay-chan": "leg fracture immobilization first aid",
  "bong-gan": "sprain first aid",
  "trat-khop": "dislocation first aid immobilization",
  "chan-thuong-cot-song": "spinal injury first aid do not move",
  "dut-tay": "severe bleeding hand injury first aid",
  "bong-nuoc-soi": "scald burn first aid cool water",
  "bong-dau": "oil burn first aid cool water",
  "bong-dien": "electrical burn first aid",
  "bong-hoa-chat": "chemical burn first aid eye rinse",
  "hoc-di-vat-nguoi-lon": "adult choking first aid back blows abdominal thrusts",
  "hoc-di-vat-tre-em": "child choking first aid back blows abdominal thrusts",
  "hoc-di-vat-tre-so-sinh": "infant choking first aid back blows chest thrusts",
  "say-nong": "heat exhaustion first aid",
  "ngo-doc-thuc-pham": "food poisoning first aid",
  "uong-hoa-chat": "ingested chemical poisoning first aid",
  "uong-thuoc-qua-lieu": "overdose first aid",
  "cho-can": "dog bite first aid",
  "meo-cao": "cat scratch first aid",
  "ong-dot": "bee sting first aid allergic reaction",
  "sua-dot": "jellyfish sting first aid",
  "hoc-sua": "infant choking on milk first aid",
  "nga-dap-dau": "head impact first aid",
  "ngat-xiu": "fainting first aid",
  "dong-kinh": "seizure first aid",
  "di-ung-phan-ve": "anaphylaxis first aid epipen",
  "hen-suyen": "asthma attack first aid"
};

function normalizeKey(value) {
  return normalizeText(value).replace(/\s+/g, " ").trim();
}

function t(title, summary, steps, notes = [], avoid = [], call = []) {
  return { title, summary, steps, notes, avoid, call };
}

const techniqueTheoryMap = {
  "cpr nguoi lon": t(
    "CPR người lớn",
    "Dùng khi nạn nhân không đáp ứng và không thở bình thường.",
    [
      "Đảm bảo an toàn, gọi 115 và nhờ người khác lấy AED nếu có.",
      "Đặt nạn nhân nằm ngửa trên mặt phẳng cứng.",
      "Đặt gót bàn tay ở giữa ngực, tay còn lại chồng lên, giữ khuỷu tay thẳng.",
      "Ép mạnh, đều, nhịp 100-120 lần/phút, để ngực nở hoàn toàn giữa các lần ép.",
      "Nếu được huấn luyện, phối hợp 30 ép : 2 thổi ngạt.",
      "Dùng AED ngay khi có và làm theo hướng dẫn của máy."
    ],
    ["Dừng càng ít càng tốt.", "Giữ vai và thân trên thẳng để lấy lực từ trọng lượng cơ thể."],
    ["Không ép vào bụng hoặc xương sườn.", "Không ngắt quãng lâu để tìm mạch."],
    ["Nạn nhân không đáp ứng.", "Không thở hoặc thở ngáp."]
  ),
  "cpr tre em": t(
    "CPR trẻ em",
    "Áp dụng khi trẻ không đáp ứng và không thở bình thường.",
    [
      "Gọi 115 và kiểm tra an toàn hiện trường.",
      "Đặt trẻ nằm ngửa trên mặt phẳng cứng.",
      "Dùng 1 hoặc 2 tay tùy kích thước trẻ, ấn vào giữa ngực.",
      "Ép sâu khoảng 1/3 bề dày ngực, nhịp 100-120 lần/phút.",
      "Nếu được huấn luyện, làm 30 ép : 2 thổi ngạt.",
      "Có AED thì dùng ngay, ưu tiên miếng dán trẻ em nếu có."
    ],
    ["Nếu chỉ có một mình với trẻ và có điện thoại, gọi trước rồi quay lại ép tim ngay."],
    ["Không ép quá mạnh như người lớn.", "Không bỏ qua hơi thở cứu hộ nếu đã được huấn luyện."],
    ["Trẻ bất tỉnh.", "Không thở hoặc chỉ thở bất thường."]
  ),
  "cpr tre so sinh": t(
    "CPR trẻ sơ sinh",
    "Dùng khi trẻ dưới 1 tuổi không thở hoặc không có đáp ứng.",
    [
      "Gọi 115 và tìm hỗ trợ ngay.",
      "Đặt trẻ nằm ngửa trên bề mặt cứng và giữ đầu ở tư thế trung tính.",
      "Dùng 2 ngón tay ép giữa ngực, ngay dưới đường nối hai núm vú.",
      "Ép nhẹ, đều, khoảng 1/3 bề dày ngực, 100-120 lần/phút.",
      "Nếu được huấn luyện, phối hợp 30 ép : 2 thổi ngạt rất nhẹ.",
      "Dùng AED có miếng dán trẻ em nếu có, hoặc theo hướng dẫn của thiết bị."
    ],
    ["Hơi thổi rất nhẹ để tránh làm căng phổi trẻ.", "Luôn giữ đầu cổ thẳng trục."],
    ["Không ấn bằng cả bàn tay.", "Không lắc trẻ hoặc xốc mạnh."],
    ["Sơ sinh bất tỉnh.", "Không thở.", "Tím tái."]
  ),
  "heimlich nguoi lon": t(
    "Heimlich người lớn",
    "Dùng cho người lớn bị hóc dị vật nhưng còn tỉnh.",
    [
      "Khuyến khích nạn nhân ho nếu còn ho được.",
      "Nếu nghẹt nặng, thực hiện 5 vỗ lưng giữa hai xương bả vai.",
      "Nếu chưa ra, thực hiện 5 ấn bụng hướng vào trong và lên trên.",
      "Lặp lại chu kỳ 5 vỗ lưng - 5 ấn bụng cho đến khi dị vật ra hoặc có hỗ trợ.",
      "Nếu nạn nhân bất tỉnh, đặt xuống nền cứng và bắt đầu CPR."
    ],
    ["Đứng phía sau và hơi thấp hơn nạn nhân.", "Quan sát miệng nếu dị vật đã lộ rõ."],
    ["Không móc họng mù.", "Không đấm mạnh vào lưng hoặc bụng."],
    ["Không nói được.", "Không thở.", "Tím tái."]
  ),
  "heimlich phu nu mang thai": t(
    "Heimlich cho phụ nữ mang thai",
    "Dùng ấn ngực thay vì ấn bụng để tránh chèn ép thai.",
    [
      "Đứng phía sau và ôm ngang vùng ngực trên.",
      "Thực hiện 5 vỗ lưng nếu cần.",
      "Nếu nghẹt chưa ra, dùng ấn ngực ở nửa dưới xương ức, hướng thẳng vào trong.",
      "Lặp lại cho đến khi dị vật ra hoặc nạn nhân bất tỉnh.",
      "Nếu bất tỉnh, đặt xuống nền cứng và bắt đầu CPR."
    ],
    ["Không ấn vào bụng.", "Luôn gọi 115 nếu tình trạng không cải thiện nhanh."],
    ["Không móc họng mù.", "Không dùng ấn bụng cho thai phụ."],
    ["Khó thở tăng nhanh.", "Tím tái.", "Mất ý thức."]
  ),
  "heimlich tre em": t(
    "Heimlich trẻ em",
    "Áp dụng cho trẻ lớn hơn 1 tuổi còn tỉnh và hóc dị vật nặng.",
    [
      "Khuyến khích trẻ ho nếu còn ho được.",
      "Nghiêng trẻ ra trước và vỗ lưng 5 lần giữa hai bả vai.",
      "Nếu không ra, thực hiện 5 ấn bụng nhẹ hơn người lớn.",
      "Lặp lại 5 vỗ lưng - 5 ấn bụng cho tới khi ra dị vật hoặc trẻ bất tỉnh.",
      "Nếu trẻ bất tỉnh, gọi 115 và bắt đầu CPR."
    ],
    ["Cần thao tác dứt khoát nhưng không quá mạnh.", "Giữ trẻ đứng hoặc quỳ đầu thấp hơn ngực nếu còn tỉnh."],
    ["Không cho uống nước.", "Không móc họng bừa."],
    ["Không nói được.", "Không thở.", "Tím môi."]
  ),
  "heimlich tre so sinh": t(
    "Hóc dị vật trẻ sơ sinh",
    "Không dùng ấn bụng cho trẻ dưới 1 tuổi; dùng vỗ lưng và ấn ngực.",
    [
      "Đỡ đầu và cổ trẻ, đặt trẻ sấp dọc theo cẳng tay, đầu thấp hơn ngực.",
      "Vỗ lưng 5 lần giữa hai xương bả vai bằng gót bàn tay.",
      "Lật trẻ ngửa, giữ đầu thấp và ấn ngực 5 lần bằng 2 ngón tay.",
      "Lặp lại 5 vỗ lưng - 5 ấn ngực cho tới khi dị vật ra hoặc trẻ bất tỉnh.",
      "Nếu bất tỉnh, gọi 115 và bắt đầu CPR cho trẻ sơ sinh."
    ],
    ["Giữ đầu cổ trẻ luôn được đỡ chắc.", "Theo dõi sắc mặt và nhịp thở liên tục."],
    ["Không ấn bụng.", "Không móc dị vật bằng tay trần nếu không thấy rõ."],
    ["Tím tái.", "Không khóc được.", "Không thở."]
  ),
  "vo lung": t(
    "Vỗ lưng",
    "Kỹ thuật đầu tiên khi người bị hóc dị vật còn tỉnh.",
    [
      "Cho nạn nhân cúi người về trước để miệng hướng xuống.",
      "Dùng gót bàn tay vỗ mạnh 5 lần vào giữa hai xương bả vai.",
      "Sau mỗi lần vỗ, kiểm tra xem dị vật đã ra chưa.",
      "Nếu chưa ra, chuyển sang ấn bụng hoặc ấn ngực theo đối tượng."
    ],
    ["Lực vỗ phải đủ mạnh để tạo áp lực tống dị vật ra.", "Giữ người bệnh chắc để không ngã."],
    ["Không vỗ vào đỉnh đầu.", "Không để nạn nhân ngửa cổ ra sau."],
    ["Không thở được.", "Tím tái.", "Mất ý thức."]
  ),
  "an bung heimlich": t(
    "Ấn bụng Heimlich",
    "Kỹ thuật tạo áp lực đẩy dị vật ra khỏi đường thở ở người lớn và trẻ lớn.",
    [
      "Đứng sau nạn nhân, vòng tay qua eo.",
      "Nắm một tay đặt trên rốn, dưới xương ức.",
      "Tay kia ôm nắm đấm và giật nhanh vào trong và lên trên.",
      "Lặp lại cho đến khi dị vật ra hoặc nạn nhân bất tỉnh."
    ],
    ["Với thai phụ hoặc người béo bụng, chuyển sang ấn ngực.", "Sau khi dị vật ra, vẫn nên theo dõi y tế."],
    ["Không đặt tay lên xương ức.", "Không ấn ngang sang hai bên."],
    ["Nạn nhân lơ mơ.", "Không thở.", "Dị vật không ra sau vài lần làm."]
  ),
  "ep cam mau": t(
    "Ép cầm máu",
    "Biện pháp đầu tiên để kiểm soát chảy máu ngoài da.",
    [
      "Đeo găng nếu có và dùng gạc hoặc khăn sạch.",
      "Ép trực tiếp và liên tục lên vết thương.",
      "Nếu gạc thấm máu, chồng thêm lớp mới lên trên, không tháo lớp cũ.",
      "Khi máu giảm, băng giữ ép và tiếp tục theo dõi.",
      "Gọi 115 nếu máu phun mạnh, không giảm, hoặc vết thương sâu."
    ],
    ["Có thể nâng cao chi nếu không nghi gãy xương.", "Giữ áp lực liên tục ít nhất vài phút."],
    ["Không liên tục nhấc tay kiểm tra.", "Không rửa mạnh khi đang chảy máu nhiều."],
    ["Máu phun thành tia.", "Nạn nhân lơ mơ.", "Không cầm được sau ép chặt."]
  ),
  "garo": t(
    "Garô",
    "Chỉ dùng cho chảy máu nặng ở chi khi ép trực tiếp không đủ.",
    [
      "Chỉ dùng trên tay hoặc chân, không dùng cho đầu, cổ, ngực, bụng.",
      "Đặt garô 5-7 cm phía trên vết thương, tránh khớp.",
      "Siết cho đến khi máu ngừng chảy hẳn.",
      "Ghi lại thời điểm đặt garô.",
      "Gọi 115 và giữ garô nguyên vị trí cho tới khi có nhân viên y tế."
    ],
    ["Garô là biện pháp cuối cùng khi chảy máu đe dọa tính mạng.", "Nếu không có garô chuyên dụng, nên ưu tiên ép trực tiếp."],
    ["Không nới lỏng garô sau khi đã siết.", "Không đặt trên khớp."],
    ["Máu phun mạnh không kiểm soát.", "Chi bị đứt rời hoặc chảy máu ồ ạt."]
  ),
  "bang ep": t(
    "Băng ép",
    "Dùng băng để giữ áp lực lên vùng đang chảy máu hoặc vết thương đã được che bằng gạc.",
    [
      "Đặt gạc sạch lên vết thương và ép trực tiếp.",
      "Quấn băng quanh vùng thương bằng các vòng chồng nhẹ.",
      "Mỗi vòng phải đủ chặt để giữ ép nhưng không làm tê hoặc lạnh chi.",
      "Kiểm tra tuần hoàn đầu ngón tay/ngón chân sau băng."
    ],
    ["Nếu máu thấm qua, thêm lớp băng mới bên ngoài.", "Băng ép không thay cho garô khi chảy máu ồ ạt."],
    ["Không quấn quá chặt gây tắc máu.", "Không che kín làm mất dấu hiệu chảy máu tiếp diễn."],
    ["Ngón tay tím lạnh sau băng.", "Băng vẫn ướt đẫm máu."]
  ),
  "bang dau": t(
    "Băng đầu",
    "Che và cố định vết thương vùng đầu bằng băng sạch.",
    [
      "Đặt gạc sạch lên vết thương nếu có chảy máu.",
      "Quấn băng quanh đầu theo vòng chéo để cố định miếng gạc.",
      "Tránh che kín mắt, mũi, miệng.",
      "Theo dõi chóng mặt, nôn, lơ mơ sau chấn thương đầu."
    ],
    ["Nếu có nghi chấn thương sọ não, cần đi khám ngay.", "Không siết quá chặt vùng trán/thái dương."],
    ["Không ấn mạnh lên vùng lõm/biến dạng.", "Không bỏ qua dấu hiệu thần kinh."],
    ["Nôn.", "Lơ mơ.", "Đau đầu tăng dần."]
  ),
  "bang mat": t(
    "Băng mắt",
    "Che mắt bị tổn thương một cách nhẹ nhàng, không đè lên nhãn cầu.",
    [
      "Đặt miếng che sạch, không dính trực tiếp lên mắt.",
      "Băng nhẹ để giữ miếng che cố định.",
      "Nếu nghi vật thể cắm vào mắt, không rút ra và không ấn lên mắt.",
      "Khuyên nạn nhân hạn chế chớp mắt, đi khám ngay."
    ],
    ["Nên che cả hai mắt để giảm cử động nếu cần.", "Dùng miếng che cứng nếu mắt bị chấn thương nặng."],
    ["Không nhỏ thuốc lạ.", "Không rửa nếu có dị vật cắm sâu."],
    ["Đau dữ dội.", "Mờ mắt.", "Vật cắm vào mắt."]
  ),
  "bang ban tay": t(
    "Băng bàn tay",
    "Giữ gạc ép và băng quanh bàn tay mà vẫn cho các ngón tay được lưu thông.",
    [
      "Đặt gạc sạch lên vết thương hoặc vùng trầy xước.",
      "Quấn băng theo vòng chéo qua mu bàn tay và lòng bàn tay.",
      "Để ngón tay hơi co tự nhiên, không ép chặt các khớp.",
      "Kiểm tra màu sắc và cảm giác đầu ngón tay."
    ],
    ["Có thể dùng băng chữ số 8 để cố định tốt hơn.", "Nếu sưng tăng, nới băng ngay."],
    ["Không quấn kín làm đầu ngón tay tím lạnh.", "Không để băng cọ vào vết thương."],
    ["Tê đầu ngón.", "Sưng tăng.", "Chảy máu lại."]
  ),
  "bang khuyu tay": t(
    "Băng khuỷu tay",
    "Cố định vùng khuỷu trong tư thế thoải mái, tránh cử động gây đau.",
    [
      "Lót gạc hoặc đệm mềm quanh khuỷu.",
      "Quấn băng theo hình số 8 để giữ khớp ổn định.",
      "Không giữ khớp thẳng cứng; để khuỷu ở góc dễ chịu.",
      "Kiểm tra tuần hoàn và cảm giác ở bàn tay."
    ],
    ["Băng khuỷu dễ tuột nếu không có lớp đệm.", "Chú ý tránh chèn mạch ở mặt trong tay."],
    ["Không ép khớp duỗi thẳng khi đang đau.", "Không băng chặn lưu thông máu."],
    ["Đau tăng.", "Tê tay.", "Bàn tay lạnh."]
  ),
  "bang dau goi": t(
    "Băng đầu gối",
    "Cố định đầu gối sau chấn thương nhẹ hoặc trầy xước lớn.",
    [
      "Đệm mềm quanh gối nếu sưng.",
      "Quấn băng số 8 quanh gối và cẳng chân/đùi để giữ cố định.",
      "Để gối ở tư thế hơi co tự nhiên nếu không đau tăng.",
      "Theo dõi sưng, đau và khả năng đi lại."
    ],
    ["Nếu nghi gãy xương hoặc trật khớp, cần cố định nẹp thay vì chỉ băng.", "Không để người bệnh chống chân mạnh."],
    ["Không cố nắn khớp.", "Không băng quá chặt."],
    ["Biến dạng rõ.", "Đau dữ dội.", "Không đứng được."]
  ),
  "bang co chan": t(
    "Băng cổ chân",
    "Dùng băng để giữ cố định cổ chân sau bong gân hoặc trật nhẹ.",
    [
      "Lót đệm mềm quanh mắt cá.",
      "Quấn băng hình số 8 qua bàn chân và cổ chân.",
      "Giữ cổ chân ở tư thế trung tính, không gập ép mạnh.",
      "Kiểm tra màu da và cảm giác ngón chân."
    ],
    ["Nâng cao chân và chườm lạnh qua khăn nếu sưng.", "Nếu đau nhiều hoặc biến dạng, đi khám."],
    ["Không đi lại ngay nếu đau tăng.", "Không băng quá chặt."],
    ["Sưng nhanh.", "Tê ngón chân.", "Đau khi chống chân."]
  ),
  "co dinh tay": t(
    "Cố định tay",
    "Dùng nẹp để giữ tay bất động, giảm đau và ngăn tổn thương mạch máu, thần kinh thêm nặng.",
    [
      "Giữ tay ở tư thế hiện tại, không nắn chỉnh hay duỗi thẳng.",
      "Đặt đệm mềm dọc theo cánh tay, khuỷu và cẳng tay để tránh cọ xát.",
      "Dùng nẹp cứng hoặc vật phẳng đủ dài để giữ cố định cả khớp trên và dưới chỗ nghi gãy.",
      "Buộc nẹp ở trên và dưới vùng tổn thương, không siết lên chỗ đau nhất.",
      "Sau khi cố định, kiểm tra đầu ngón tay: còn hồng ấm, có cảm giác, không tê lạnh."
    ],
    ["Nếu có thể, treo tay bằng khăn tam giác để giảm đau.", "Giữ vai, khuỷu và cổ tay nằm cùng trục."],
    ["Không nắn chỉnh xương.", "Không cố nâng tay lên cao nếu đau tăng.", "Không buộc quá chặt làm tím lạnh bàn tay."],
    ["Tay biến dạng rõ.", "Tê hoặc lạnh bàn tay.", "Mất mạch hoặc đau tăng sau cố định."]
  ),
  "co dinh chan": t(
    "Cố định chân",
    "Cố định chân để ngăn xương gãy di lệch thêm và giảm đau khi vận chuyển.",
    [
      "Không cho nạn nhân đứng dậy hoặc tự đi lại.",
      "Đệm mềm quanh chân trước khi đặt nẹp để giảm đau và chống tỳ đè.",
      "Dùng nẹp dài để cố định cả khớp trên và dưới chỗ nghi gãy.",
      "Nếu không có nẹp, buộc chân bị thương với chân lành bằng các dải băng mềm.",
      "Kiểm tra màu da, cảm giác và mạch ở bàn chân sau khi cố định."
    ],
    ["Nếu nghi gãy đùi hoặc đau dữ dội, ưu tiên gọi 115.", "Giữ chân ở vị trí phát hiện ban đầu nếu không nguy hiểm."],
    ["Không kéo chân về đúng trục.", "Không để nạn nhân tự đi.", "Không buộc quá chặt làm bàn chân lạnh tím."],
    ["Đau tăng sau khi cố định.", "Bàn chân tê lạnh.", "Biến dạng rõ hoặc không chịu lực."]
  ),
  "co dinh cang tay": t(
    "Cố định cẳng tay",
    "Cố định cẳng tay bằng nẹp để giảm cử động của cổ tay và khuỷu tay.",
    [
      "Đặt đệm mềm dọc cẳng tay để tránh tỳ đè lên xương gãy.",
      "Đặt nẹp dọc theo cẳng tay, dài qua cả cổ tay và gần khuỷu tay.",
      "Buộc nẹp ở trên và dưới chỗ nghi gãy, không siết vào xương nhô.",
      "Treo tay bằng khăn tam giác nếu cần để giảm kéo căng và đau."
    ],
    ["Giữ bàn tay ở tư thế thoải mái, thường là hơi ngửa nhẹ.", "Kiểm tra đầu ngón tay trước và sau cố định."],
    ["Không xoay cẳng tay.", "Không nắn thẳng cổ tay nếu lệch trục.", "Không bó chặt làm tê bàn tay."],
    ["Tê đầu ngón tay.", "Bàn tay lạnh tím.", "Đau tăng khi cử động."]
  ),
  "co dinh cang chan": t(
    "Cố định cẳng chân",
    "Cố định cẳng chân để giữ ổ gãy ổn định và hạn chế đau khi chuyển nạn nhân.",
    [
      "Đệm mềm quanh cẳng chân trước khi đặt nẹp.",
      "Đặt nẹp dọc từ trên gối đến qua mắt cá để giữ cả hai khớp.",
      "Buộc nẹp ở trên và dưới vị trí nghi gãy, giữ vừa đủ chắc.",
      "Theo dõi màu da, nhiệt độ và cảm giác của bàn chân sau cố định."
    ],
    ["Nếu không có nẹp, có thể buộc với chân lành để tăng ổn định.", "Giữ chân ở vị trí hiện tại nếu không có nguy cơ khác."],
    ["Không để nạn nhân tự đi.", "Không nắn chỉnh xương.", "Không siết quá chặt làm mất tuần hoàn."],
    ["Đau nhói tăng dần.", "Bàn chân tê lạnh.", "Không chịu lực hoặc biến dạng rõ."]
  ),
  "co dinh co": t(
    "Cố định cổ",
    "Giữ đầu cổ ở tư thế trung tính để tránh làm nặng thêm chấn thương cột sống cổ.",
    [
      "Giữ đầu cổ bằng tay ở vị trí hiện tại và yêu cầu nạn nhân không cử động.",
      "Dùng khăn cuộn hoặc vật mềm chèn hai bên đầu để chặn lắc ngang.",
      "Giữ đầu, cổ và thân trên cùng một trục, không bẻ cong hay xoay đầu.",
      "Gọi 115 nếu tai nạn mạnh, đau cổ nhiều, tê tay chân hoặc yếu liệt."
    ],
    ["Chỉ di chuyển nếu hiện trường có nguy cơ tức thời như cháy nổ.", "Nếu có mũ bảo hiểm và nghi chấn thương cổ, xử trí rất thận trọng."],
    ["Không ngồi dậy đột ngột.", "Không xoay cổ để hỏi đáp.", "Không tự tháo mũ bảo hiểm nếu không được huấn luyện."],
    ["Đau cổ dữ dội.", "Tê yếu tay chân.", "Nghi chấn thương sau tai nạn mạnh."]
  ),
  "tu the hoi phuc": t(
    "Tư thế hồi phục",
    "Dùng cho người bất tỉnh nhưng vẫn còn thở.",
    [
      "Quỳ bên cạnh nạn nhân, đặt tay gần mình vuông góc.",
      "Đặt tay còn lại qua ngực và gập đầu gối xa người lên.",
      "Lăn nạn nhân nghiêng về phía bạn một cách chậm và chắc.",
      "Ngửa nhẹ đầu để mở đường thở, miệng hướng xuống.",
      "Theo dõi thở và chờ hỗ trợ y tế."
    ],
    ["Dùng khi nạn nhân còn thở nhưng không tỉnh.", "Giúp dịch chảy ra ngoài, giảm nguy cơ sặc."],
    ["Không đặt nạn nhân ngửa phẳng nếu đang nôn.", "Không bỏ mặc không theo dõi."],
    ["Bất tỉnh.", "Có thở.", "Nôn hoặc nhiều dịch trong miệng."]
  ),
  "di chuyen nan nhan an toan": t(
    "Di chuyển nạn nhân an toàn",
    "Chỉ di chuyển khi hiện trường nguy hiểm và phải ưu tiên bảo vệ cổ lưng.",
    [
      "Chỉ di chuyển khi có cháy, điện, sập đổ hoặc nguy cơ tức thời khác.",
      "Giữ đầu-cổ-thân thẳng hàng nếu nghi chấn thương cột sống.",
      "Nhờ thêm người để nâng đỡ đồng thời vai, hông và chân.",
      "Di chuyển ngắn nhất có thể tới nơi an toàn."
    ],
    ["Nếu không có nguy cơ ngay lập tức, tốt nhất là không di chuyển.", "Ưu tiên tránh làm nặng thêm chấn thương."],
    ["Không kéo một mình qua vai chân.", "Không xoay vặn cột sống."],
    ["Hiện trường đang nguy hiểm.", "Có nghi chấn thương cổ lưng."]
  ),
  "su dung aed": t(
    "Sử dụng AED",
    "Máy AED dùng để khử rung và cần đi kèm CPR.",
    [
      "Bật máy ngay khi lấy được AED.",
      "Làm trần ngực và lau khô nếu ướt.",
      "Dán miếng điện cực theo hình hướng dẫn trên máy.",
      "Không chạm vào nạn nhân khi máy đang phân tích hoặc sốc.",
      "Ngay sau sốc, tiếp tục CPR theo hướng dẫn của máy."
    ],
    ["Nếu ngực rậm lông hoặc có miếng dán cũ, xử trí theo hướng dẫn của AED.", "Luôn để máy hướng dẫn từng bước."],
    ["Không đặt điện cực chồng lên nhau.", "Không đứng quanh nạn nhân khi máy yêu cầu tránh chạm."],
    ["Ngừng tim.", "Máy báo sốc.", "Đang có AED gần đó."]
  ),
  "cach goi 115": t(
    "Cách gọi 115",
    "Gọi cấp cứu rõ ràng, ngắn gọn, đủ thông tin.",
    [
      "Nói vị trí chính xác nhất có thể: số nhà, đường, phường/xã, mốc nhận biết.",
      "Nói chuyện gì đang xảy ra: ngừng thở, chảy máu, bỏng, tai nạn, đuối nước...",
      "Nói tình trạng nạn nhân: tỉnh hay bất tỉnh, còn thở không, có chảy máu không.",
      "Nói số người bị nạn và nguy cơ hiện trường nếu có.",
      "Giữ máy mở và làm theo hướng dẫn của tổng đài."
    ],
    ["Nên bật loa ngoài nếu đang một mình.", "Không cúp máy trước khi được phép."],
    ["Không nói quá dài, lạc đề.", "Không rời máy khi tổng đài đang hỏi."],
    ["Bất kỳ tình huống nặng nào.", "Không rõ phải làm gì tiếp theo."]
  ),
  "rua bong": t(
    "Rửa bỏng",
    "Làm mát sớm giúp giảm tổn thương cho bỏng nhiệt.",
    [
      "Đưa vùng bỏng dưới nước mát sạch chảy nhẹ 15-20 phút.",
      "Tháo trang sức, đồng hồ và quần áo chật quanh vùng bỏng nếu không dính.",
      "Sau khi làm mát, che phủ bằng gạc hoặc vải sạch không dính.",
      "Đưa đi khám nếu bỏng rộng, sâu hoặc ở mặt, tay, chân, sinh dục."
    ],
    ["Nước mát là đủ, không cần nước đá.", "Giữ vùng bỏng sạch và khô sau khi làm mát."],
    ["Không bôi kem đánh răng, dầu, mỡ.", "Không chọc vỡ bóng nước."],
    ["Bỏng sâu.", "Bỏng điện/hóa chất.", "Bỏng ở vùng nhạy cảm."]
  ),
  "rua mat hoa chat": t(
    "Rửa mắt hóa chất",
    "Xả trôi hóa chất ngay và liên tục.",
    [
      "Dùng nước sạch hoặc dung dịch rửa mắt xả liên tục vào mắt.",
      "Giữ mí mắt mở nhẹ để nước chảy qua toàn bộ bề mặt mắt.",
      "Rửa ít nhất 15-20 phút, lâu hơn nếu hóa chất mạnh.",
      "Nếu có kính áp tròng và lấy ra được nhanh, lấy ra sau khi bắt đầu xả.",
      "Đi khám/cấp cứu ngay sau khi rửa xong."
    ],
    ["Ưu tiên rửa ngay, không chờ tìm thuốc.", "Rửa cả hai mắt nếu chất bắn khó xác định."],
    ["Không dụi mắt.", "Không nhỏ hóa chất trung hòa tùy tiện."],
    ["Hóa chất bắn vào mắt.", "Đau rát, mờ mắt, đỏ nhiều."]
  ),
  "lam mat co the": t(
    "Làm mát cơ thể",
    "Dùng cho say nắng/say nóng để hạ nhiệt an toàn.",
    [
      "Đưa nạn nhân vào chỗ mát, thoáng gió.",
      "Nới lỏng hoặc cởi bớt quần áo thừa.",
      "Lau hoặc xịt nước mát lên da, kết hợp quạt.",
      "Đặt khăn mát ở cổ, nách, bẹn nếu có.",
      "Nếu lơ mơ, co giật hoặc không cải thiện nhanh, gọi 115."
    ],
    ["Theo dõi ý thức và nhịp thở trong lúc làm mát.", "Cho uống nước chỉ khi còn tỉnh táo và không buồn nôn."],
    ["Không cho uống khi lơ mơ.", "Không dùng đá trực tiếp lên da."],
    ["Đau đầu dữ dội.", "Lú lẫn.", "Nhiệt độ cơ thể rất cao."]
  ),
  "u am an toan": t(
    "Ủ ấm an toàn",
    "Giúp người bị lạnh quá mức giữ nhiệt và ngăn mất nhiệt thêm.",
    [
      "Đưa nạn nhân vào nơi khô, kín gió.",
      "Thay bỏ quần áo ướt và quấn chăn khô.",
      "Ưu tiên làm ấm thân mình, đầu và cổ trước.",
      "Cho uống đồ ấm nếu tỉnh táo và nuốt bình thường.",
      "Nếu lơ mơ hoặc run giảm nhưng lạnh sâu, gọi 115."
    ],
    ["Làm ấm từ từ, không hơ nóng đột ngột.", "Giữ người bệnh nằm yên."],
    ["Không xoa bóp mạnh.", "Không ngâm nước nóng đột ngột."],
    ["Run bớt nhưng người rất lạnh.", "Lơ mơ.", "Khó thở."]
  ),
  "theo doi nhip tho": t(
    "Theo dõi nhịp thở",
    "Kiểm tra xem nạn nhân còn thở đều hay không.",
    [
      "Quan sát ngực có nâng lên hạ xuống không.",
      "Lắng nghe hơi thở và cảm nhận luồng khí từ miệng/mũi trong tối đa 10 giây.",
      "Nếu thở ngáp, thở yếu hoặc không thở, gọi 115 và bắt đầu CPR.",
      "Nếu còn thở nhưng bất tỉnh, đặt tư thế hồi phục."
    ],
    ["Thở ngáp không phải là thở bình thường.", "Theo dõi liên tục vì tình trạng có thể xấu nhanh."],
    ["Không mất quá 10 giây để kiểm tra.", "Không bỏ qua thở bất thường."],
    ["Bất tỉnh.", "Thở ngáp.", "Khó thở nặng."]
  ),
  "tu the de tho": t(
    "Tư thế dễ thở",
    "Giúp người khó thở giảm công thở và dễ lấy hơi hơn.",
    [
      "Cho nạn nhân ngồi hoặc nửa ngồi nửa nằm, hơi nghiêng về trước.",
      "Dùng gối hoặc tay vịn để đỡ cánh tay, giúp vai thả lỏng.",
      "Nới lỏng quần áo chật quanh cổ và ngực.",
      "Theo dõi tím tái, mệt tăng hoặc nói không thành câu."
    ],
    ["Nếu là người có bệnh hen và có thuốc xịt được kê trước, hỗ trợ dùng theo chỉ định sẵn có.", "Gọi 115 nếu nặng dần."],
    ["Không ép nằm ngửa khi đang khó thở.", "Không cho ăn uống lúc thở rất gắng sức."],
    ["Không nói được.", "Tím môi.", "Co kéo lồng ngực."]
  ),
  "fast": t(
    "FAST",
    "Mẹo nhận biết sớm đột quỵ.",
    [
      "F - Face: bảo nạn nhân cười, xem một bên mặt có méo không.",
      "A - Arm: bảo nâng hai tay, xem có tay nào rơi xuống không.",
      "S - Speech: yêu cầu nói một câu đơn giản, xem có nói ngọng/lẫn không.",
      "T - Time: nếu có bất kỳ dấu hiệu nào, gọi 115 ngay."
    ],
    ["Ghi nhớ giờ bắt đầu triệu chứng.", "Không chờ xem có tự hết không."],
    ["Không tự cho uống thuốc linh tinh.", "Không trì hoãn."],
    ["Méo miệng.", "Yếu tay chân.", "Nói khó."]
  ),
  "xu tri bong dien": t(
    "Xử trí bỏng điện",
    "Bỏng điện luôn cần ưu tiên an toàn điện và đánh giá tim phổi.",
    [
      "Ngắt nguồn điện trước khi chạm vào nạn nhân.",
      "Không chạm trực tiếp nếu nguồn điện chưa được ngắt.",
      "Gọi 115, kiểm tra thở và bắt đầu CPR nếu cần.",
      "Che phủ vùng bỏng bằng gạc sạch và giữ nạn nhân yên."
    ],
    ["Điện có thể gây tổn thương bên trong dù vết ngoài nhỏ.", "Luôn kiểm tra nhịp thở và ý thức."],
    ["Không dội nước khi còn điện.", "Không chủ quan vì vết bỏng ngoài nhìn nhỏ."],
    ["Bất tỉnh.", "Khó thở.", "Đau ngực."]
  ),
  "ep cam mau mui": t(
    "Ép cầm máu mũi",
    "Cách xử trí chảy máu cam đúng.",
    [
      "Cho ngồi thẳng, hơi cúi đầu về trước.",
      "Bóp chặt phần mềm của cánh mũi liên tục 10-15 phút.",
      "Thở bằng miệng và có thể chườm lạnh sống mũi.",
      "Nếu máu chưa ngừng, lặp lại thêm một lần nữa."
    ],
    ["Không ngửa đầu ra sau vì máu có thể chảy xuống họng.", "Sau khi ngừng, không xì mũi ngay."],
    ["Không nhét giấy sâu vào mũi.", "Không ngửa đầu ra sau."],
    ["Chảy > 20 phút.", "Choáng.", "Sau chấn thương."]
  ),
  "lay ngoi ong": t(
    "Lấy ngòi ong",
    "Dùng khi bị ong đốt và còn thấy ngòi ong trên da.",
    [
      "Cạo nhẹ ngòi ong ra bằng móng tay, mép thẻ hoặc vật phẳng sạch.",
      "Rửa sạch vùng đốt bằng nước và xà phòng.",
      "Chườm lạnh để giảm đau sưng.",
      "Theo dõi dấu hiệu dị ứng lan rộng hoặc khó thở."
    ],
    ["Lấy nhanh nhưng nhẹ để tránh bóp thêm nọc.", "Đưa đi viện nếu có phản vệ."],
    ["Không nặn bóp mạnh.", "Không gãi nhiều."],
    ["Khó thở.", "Sưng môi/lưỡi.", "Nổi mề đay toàn thân."]
  ),
  "xu tri phan ve": t(
    "Xử trí phản vệ",
    "Phản vệ là dị ứng nặng, cần cấp cứu ngay.",
    [
      "Gọi 115 ngay lập tức.",
      "Nếu có bút tiêm epinephrine theo chỉ định, hỗ trợ dùng ngay.",
      "Cho nạn nhân nằm hoặc nửa ngồi tùy khó thở, nới lỏng quần áo.",
      "Theo dõi thở, ý thức và sẵn sàng CPR nếu ngưng thở."
    ],
    ["Phản vệ có thể xấu đi rất nhanh.", "Không trì hoãn vì chờ đỡ hơn."],
    ["Không tự cho uống đồ ăn/uống lạ.", "Không chờ triệu chứng tự hết."],
    ["Khó thở.", "Sưng môi/lưỡi.", "Choáng, tụt ý thức."]
  )
};

function getTechniqueTheoryKey(groupTitle, itemLabel) {
  const group = normalizeKey(groupTitle);
  const item = normalizeKey(itemLabel);

  if (group === "cpr") return normalizeKey(`cpr ${itemLabel}`);
  if (group === "heimlich") return normalizeKey(`heimlich ${itemLabel}`);
  if (group === "cam mau") return item === "ep cam mau" ? "ep cam mau" : item;
  return item;
}

function getTheoryEntryByKey(key) {
  return techniqueTheoryMap[normalizeKey(key)] || {
    title: key,
    summary: "Nội dung đang được bổ sung.",
    steps: ["Chọn kỹ thuật khác để xem phần hướng dẫn chi tiết."],
    notes: [],
    avoid: [],
    call: []
  };
}


function getTechniqueMediaForKey(key) {
  const entry = getTheoryEntryByKey(key);
  const poster = getPosterForTechnique(key, { title: entry.title, group: entry.title });
  return {
    poster,
    videoUrl: getVideoForTechnique(entry.title, { title: entry.title, group: entry.title })
  };
}

function renderTheoryContent(entry) {
  return `
    <div class="theory-card">
      <div>
        <h4>Mục đích</h4>
        <p>${entry.summary}</p>
      </div>
      <div>
        <h4>Các bước</h4>
        <ol class="theory-steps">
          ${entry.steps.map((step) => `<li>${step}</li>`).join("")}
        </ol>
      </div>
      ${entry.notes.length ? `
        <div>
          <h4>Lưu ý</h4>
          <ul class="theory-list">${entry.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
        </div>
      ` : ""}
      ${entry.avoid.length ? `
        <div>
          <h4>Không làm</h4>
          <ul class="theory-list danger-list">${entry.avoid.map((item) => `<li>❌ ${item}</li>`).join("")}</ul>
        </div>
      ` : ""}
      ${entry.call.length ? `
        <div>
          <h4>Gọi 115 khi</h4>
          <ul class="theory-list">${entry.call.map((item) => `<li>${item}</li>`).join("")}</ul>
        </div>
      ` : ""}
    </div>
  `;
}

function getTechniqueKeyForGroup(groupTitle, itemLabel) {
  const group = normalizeKey(groupTitle);
  const item = normalizeKey(itemLabel);

  if (group === "cpr") return normalizeKey(`cpr ${itemLabel}`);
  if (group === "heimlich") return normalizeKey(`heimlich ${itemLabel}`);
  if (group === "cam mau") return item === "ep cam mau" ? "ep cam mau" : item;
  return item;
}

function normalizeText(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "d");
}

function getVideoForSituation(situation) {
  const situationVideoMap = {
    "chay-mau": videoMap["Ép cầm máu"],
    "hoc-di-vat": videoMap["Ấn bụng Heimlich"],
    "ngung-tim": videoMap["CPR người lớn"],
    "bong": videoMap["Rửa bỏng"],
    "dien-giat": videoMap["Sử dụng AED"],
    "gay-xuong": videoMap["CPR người lớn"],
    "chan-thuong-dau": videoMap["CPR người lớn"],
    "ran-can": videoMap["CPR người lớn"],
    "con-trung-dot": videoMap["CPR người lớn"],
    "say-nang": videoMap["CPR người lớn"],
    "ha-than-nhiet": videoMap["CPR người lớn"],
    "co-giat": videoMap["CPR người lớn"],
    "dot-quy": videoMap["CPR người lớn"],
    "nhoi-mau-co-tim": videoMap["CPR người lớn"],
    "kho-tho": videoMap["CPR người lớn"],
    "ngo-doc": videoMap["CPR người lớn"],
    "tai-nan-giao-thong": videoMap["Ép cầm máu"],
    "duoi-nuoc": videoMap["CPR người lớn"],
    "sot-cao-co-giat": videoMap["CPR người lớn"],
    "chay-mau-cam": videoMap["Ép cầm máu"],
    "gay-tay": videoMap["Ép cầm máu"],
    "gay-chan": videoMap["Ép cầm máu"],
    "bong-gan": videoMap["Ép cầm máu"],
    "trat-khop": videoMap["Ép cầm máu"],
    "chan-thuong-cot-song": videoMap["CPR người lớn"],
    "dut-tay": videoMap["Ép cầm máu"],
    "bong-nuoc-soi": videoMap["Rửa bỏng"],
    "bong-dau": videoMap["Rửa bỏng"],
    "bong-dien": videoMap["Rửa bỏng"],
    "bong-hoa-chat": videoMap["Rửa bỏng"],
    "hoc-di-vat-nguoi-lon": videoMap["Ấn bụng Heimlich"],
    "hoc-di-vat-tre-em": videoMap["Ấn bụng Heimlich"],
    "hoc-di-vat-tre-so-sinh": videoMap["Ấn bụng Heimlich"],
    "say-nong": videoMap["CPR người lớn"],
    "ngo-doc-thuc-pham": videoMap["CPR người lớn"],
    "uong-hoa-chat": videoMap["CPR người lớn"],
    "uong-thuoc-qua-lieu": videoMap["CPR người lớn"],
    "cho-can": videoMap["CPR người lớn"],
    "meo-cao": videoMap["CPR người lớn"],
    "ong-dot": videoMap["CPR người lớn"],
    "sua-dot": videoMap["CPR người lớn"],
    "hoc-sua": videoMap["Ấn bụng Heimlich"],
    "nga-dap-dau": videoMap["CPR người lớn"],
    "ngat-xiu": videoMap["CPR người lớn"],
    "dong-kinh": videoMap["CPR người lớn"],
    "di-ung-phan-ve": videoMap["CPR người lớn"],
    "hen-suyen": videoMap["CPR người lớn"]
  };

  return situationVideoMap[situation.id] || videoMap["CPR người lớn"];
}

function getVideoForTechnique(technique, situation) {
  const text = normalizeText(`${technique} ${situation.title} ${situation.group}`);
  const cprVideo = videoMap["CPR người lớn"];
  const chokingVideo = videoMap["Ấn bụng Heimlich"];
  const bleedingVideo = videoMap["Ép cầm máu"];
  const burnVideo = videoMap["Rửa bỏng"];
  const aedVideo = videoMap["Sử dụng AED"];

  if (text.includes("aed")) return aedVideo;
  if (text.includes("heimlich") || text.includes("vo lung") || text.includes("hoc")) return chokingVideo;
  if (text.includes("cpr") || text.includes("ngung tim") || text.includes("ep tim")) return cprVideo;
  if (text.includes("cam mau") || text.includes("garo") || text.includes("bang ep") || text.includes("bang phu") || text.includes("bang dau") || text.includes("bang mat") || text.includes("bang ban tay") || text.includes("bang khuyu tay") || text.includes("bang dau goi") || text.includes("bang co chan") || text.includes("dut tay") || text.includes("chay mau")) return bleedingVideo;
  if (text.includes("bong") || text.includes("hoa chat") || text.includes("rua mat")) return burnVideo;
  if (text.includes("co dinh") || text.includes("gay") || text.includes("xuong") || text.includes("trat khop") || text.includes("bong gan")) return bleedingVideo;
  if (text.includes("hoi phuc") || text.includes("co giat") || text.includes("dong kinh") || text.includes("ngat")) return cprVideo;
  if (text.includes("duoi nuoc") || text.includes("cuu ho")) return cprVideo;
  if (text.includes("phan ve") || text.includes("di ung")) return cprVideo;
  if (text.includes("ngo doc") || text.includes("thuoc qua lieu") || text.includes("uong hoa chat") || text.includes("thuc pham")) return cprVideo;
  if (text.includes("ran") || text.includes("cho can") || text.includes("meo") || text.includes("ong") || text.includes("sua") || text.includes("con trung") || text.includes("ngoi ong")) return cprVideo;
  if (text.includes("say nang") || text.includes("say nong") || text.includes("ha than nhiet") || text.includes("ha sot") || text.includes("lam mat") || text.includes("u am") || text.includes("chuom lanh")) return cprVideo;
  if (text.includes("nhip tho") || text.includes("kho tho") || text.includes("hen") || text.includes("tu the de tho") || text.includes("ngung tho")) return cprVideo;
  if (text.includes("115") || text.includes("dot quy") || text.includes("nhoi mau")) return cprVideo;
  if (text.includes("an toan") || text.includes("hien truong") || text.includes("di chuyen")) return cprVideo;

  return cprVideo;
}

function getPosterForTechnique(technique, situation) {
  const text = normalizeText(`${technique} ${situation.title} ${situation.group}`);

  if (text.includes("aed")) return posterAssets.aed;
  if (text.includes("heimlich") || text.includes("vo lung") || text.includes("hoc")) return posterAssets.heimlich;
  if (text.includes("cpr") || text.includes("ngung tim") || text.includes("ep tim")) return posterAssets.cpr;
  if (text.includes("cam mau") || text.includes("garo") || text.includes("bang ep") || text.includes("bang phu") || text.includes("bang dau") || text.includes("bang mat") || text.includes("bang ban tay") || text.includes("bang khuyu tay") || text.includes("bang dau goi") || text.includes("bang co chan") || text.includes("dut tay") || text.includes("chay mau")) return posterAssets.bleeding;
  if (text.includes("bong") || text.includes("hoa chat") || text.includes("rua mat")) return posterAssets.burn;
  if (text.includes("co dinh") || text.includes("gay") || text.includes("xuong") || text.includes("trat khop") || text.includes("bong gan")) return posterAssets.fracture;
  if (text.includes("hoi phuc") || text.includes("co giat") || text.includes("dong kinh") || text.includes("ngat")) return posterAssets.recovery;
  if (text.includes("duoi nuoc") || text.includes("cuu ho")) return posterAssets.water;
  if (text.includes("phan ve") || text.includes("di ung")) return posterAssets.allergy;
  if (text.includes("ngo doc") || text.includes("thuoc qua lieu") || text.includes("uong hoa chat") || text.includes("thuc pham")) return posterAssets.poison;
  if (text.includes("ran") || text.includes("cho can") || text.includes("meo") || text.includes("ong") || text.includes("sua") || text.includes("con trung") || text.includes("ngoi ong")) return posterAssets.animal;
  if (text.includes("say nang") || text.includes("say nong") || text.includes("ha than nhiet") || text.includes("ha sot") || text.includes("lam mat") || text.includes("u am") || text.includes("chuom lanh")) return posterAssets.temperature;
  if (text.includes("nhip tho") || text.includes("kho tho") || text.includes("hen") || text.includes("tu the de tho") || text.includes("ngung tho")) return posterAssets.breathing;
  if (text.includes("115") || text.includes("fast") || text.includes("dot quy") || text.includes("nhoi mau")) return posterAssets.emergency;
  if (text.includes("an toan") || text.includes("hien truong") || text.includes("di chuyen")) return posterAssets.safety;

  return posterAssets.default;
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
        ${item.group === "Chấn thương" ? `<span class="card-hint">Nên dùng: ${item.techniques.join(" · ")}</span>` : ""}
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

  const buttons = [];
  grid.innerHTML = `
    ${techniqueGroups.map(([title, items]) => `
      <article class="technique-group">
        <h3>${title}</h3>
        <div class="pill-list">
          ${items.map((item) => {
            const key = getTechniqueKeyForGroup(title, item);
            buttons.push(key);
            return `<button class="pill pill-button" type="button" data-technique-key="${key}">${item}</button>`;
          }).join("")}
        </div>
      </article>
    `).join("")}
    <article class="technique-theory">
      <div class="theory-head">
        <span class="section-label">Lý thuyết thực hành</span>
        <h3 id="techniqueTheoryTitle"></h3>
        <p id="techniqueTheorySummary"></p>
      </div>
      <div class="video-frame">
        <a id="techniqueVideoLink" class="video-placeholder" href="#" target="_blank" rel="noreferrer">
          <img id="techniqueVideoPoster" alt="" />
        </a>
        <a id="techniquePlayLink" class="play-button" href="#" target="_blank" rel="noreferrer" aria-label="Mở video minh họa">▶</a>
      </div>
      <div id="techniqueTheoryViewer" class="theory-viewer"></div>
    </article>
  `;

  const firstKey = buttons[0] || "cpr nguoi lon";
  const theoryViewer = document.querySelector("#techniqueTheoryViewer");
  const theoryTitle = document.querySelector("#techniqueTheoryTitle");
  const theorySummary = document.querySelector("#techniqueTheorySummary");
  const videoPoster = document.querySelector("#techniqueVideoPoster");
  const videoLink = document.querySelector("#techniqueVideoLink");
  const playLink = document.querySelector("#techniquePlayLink");
  const pillButtons = grid.querySelectorAll(".pill-button");

  const setActive = (key) => {
    const entry = getTheoryEntryByKey(key);
    const media = getTechniqueMediaForKey(key);
    theoryTitle.textContent = entry.title;
    theorySummary.textContent = entry.summary;
    theoryViewer.innerHTML = renderTheoryContent(entry);
    videoPoster.src = media.poster;
    videoPoster.alt = `Video minh họa ${entry.title}`;
    videoLink.href = media.videoUrl;
    playLink.href = media.videoUrl;
    pillButtons.forEach((button) => {
      button.classList.toggle("active", button.dataset.techniqueKey === key);
    });
  };

  pillButtons.forEach((button) => {
    button.addEventListener("click", () => setActive(button.dataset.techniqueKey));
  });

  setActive(firstKey);
}

function renderDetailPage() {
  const root = document.querySelector("#detailRoot");
  if (!root) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id") || "hoc-di-vat";
  const item = allSituations.find((situation) => situation.id === id) || situations[1];
  const firstKey = normalizeKey(item.techniques[0]);

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
        <h2>Hình minh họa</h2>
        <p>Quan sát hiện trường, nhận biết dấu hiệu và chọn đúng kỹ thuật cần xem ở phần dưới.</p>
      </article>
      <article class="detail-panel">
        <h2>Dấu hiệu nhận biết</h2>
        <ul>${item.signs.map((sign) => `<li>${sign}</li>`).join("")}</ul>
      </article>
      <article class="detail-panel">
        <h2>Cần làm gì ngay?</h2>
        <ol>${item.actions.map((action) => `<li>${action}</li>`).join("")}</ol>
      </article>
      <article class="detail-panel technique-hint-panel">
        <h2>Kỹ thuật nên dùng</h2>
        <p>Với tình huống này, nên ưu tiên các kỹ thuật sau:</p>
        <ul>${item.techniques.map((technique) => `<li>${technique}</li>`).join("")}</ul>
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
        <h2>Video minh họa</h2>
        <p id="detailVideoSummary">Chọn một kỹ thuật phía dưới để xem video minh họa tương ứng.</p>
        <div class="video-frame">
          <a id="detailVideoLink" class="video-placeholder" href="#" target="_blank" rel="noreferrer">
            <img id="detailVideoPoster" alt="" />
          </a>
          <a id="detailPlayLink" class="play-button" href="#" target="_blank" rel="noreferrer" aria-label="Mở video minh họa">▶</a>
        </div>
      </article>
      <article class="detail-panel theory-panel">
        <h2>Các kỹ thuật sơ cứu</h2>
        <div class="tech-buttons">
          ${item.techniques.map((technique, index) => `
            <button class="tech-button ${index === 0 ? "active" : ""}" type="button" data-technique-key="${normalizeKey(technique)}" data-technique-label="${technique}">
              ${technique}
            </button>
          `).join("")}
        </div>
        <div id="detailTheoryViewer" class="theory-viewer"></div>
      </article>
    </section>
  `;

  const buttons = root.querySelectorAll(".tech-button");
  const theoryViewer = root.querySelector("#detailTheoryViewer");
  const videoPoster = root.querySelector("#detailVideoPoster");
  const videoLink = root.querySelector("#detailVideoLink");
  const playLink = root.querySelector("#detailPlayLink");
  const detailVideoSummary = root.querySelector("#detailVideoSummary");

  const setActive = (button) => {
    buttons.forEach((itemButton) => itemButton.classList.remove("active"));
    button.classList.add("active");

    const key = button.dataset.techniqueKey;
    const label = button.dataset.techniqueLabel || button.textContent.trim();
    const entry = getTheoryEntryByKey(key);
    const media = getTechniqueMediaForKey(key);

    theoryViewer.innerHTML = renderTheoryContent(entry);
    videoPoster.src = getPosterForTechnique(label, item);
    videoPoster.alt = `Video minh họa ${entry.title}`;
    videoLink.href = getVideoForTechnique(label, item);
    playLink.href = getVideoForTechnique(label, item);
    detailVideoSummary.textContent = `Video minh họa cho ${label} trong tình huống ${item.title}.`;
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => setActive(button));
  });

  setActive(buttons[0]);
}

renderSituationGrid();
renderTechniqueGrid();
renderDetailPage();
