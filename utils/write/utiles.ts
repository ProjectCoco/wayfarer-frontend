export const memberProcessing = (members: string[][]) => {
  return members.map((member: string[]) => {
    return {
      position: member[0],
      totalMember: +member[1].split("명")[0],
    };
  });
};

export const dateProcessing = (dateArr: [string, string, string]) => {
  const year = +dateArr[0].split("년")[0];
  const month = +dateArr[1].split("월")[0];
  const day = +dateArr[2].split("일")[0];
  console.log(year, month, day);
  const inputDate = new Date(`${year}-${month}-${day} 00:00:00`);
  const validDate = new Date(
    inputDate.getTime() - inputDate.getTimezoneOffset() * 60000
  ).toISOString();
  return validDate;
};
