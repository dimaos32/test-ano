function humanizeDate(isoDateStr: string, time = false): string {
  const date = new Date(isoDateStr);

  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  let result = `${day}.${month}.${year}`;

  if (time) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    result += `, ${hours}:${minutes}`;
  }

  return result;
}

export default humanizeDate;
