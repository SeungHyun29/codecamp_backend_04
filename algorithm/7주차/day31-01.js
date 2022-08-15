function solution(id_list, report, k) {
  const reporter = {}; // 신고한 사람이 대상으로 삼은 사람이 누구인지 저장
  const reportList = {}; // 신고 당한 사람의 누적 신고량을 저장

  const answer = [];
  report = Array.from([...new Set(report)]);

  for (let i = 0; i < report.length; i++) {
    const info = report[i].split(" ");

    if (reporter[info[0]] === undefined) {
      reporter[info[0]] = [];
    }
    if (reportList[info[1]] === undefined) {
      reportList[info[1]] = 0;
    }

    // 중복 신고 제거
    // 같은 유저에 대한 신고 경력이 있는지 체크
    // if( reporter[ info[0] ].includes( info[1] ) === false ) {
    reporter[info[0]].push(info[1]);
    reportList[info[1]]++;
    // }
  }

  for (let j = 0; j < id_list.length; j++) {
    const arr = reporter[id_list[j]] || [];

    answer[j] = 0;
    for (let l = 0; l < arr.length; l++) {
      if (reportList[arr[l]] >= k) {
        answer[j]++;
      }
    }
  }

  return answer;
}
