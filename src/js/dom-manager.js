function createTable(data, createHtml) {
  return data.map((row)=> {
    return createHtml(row);
  }).join("");
}

function createQuizRow(quizRow) {
  return `
  <tr>
    <td>${quizRow.title}</td>
    <td>
      <a class="badge bg-secondary" href="${quizRow.docUrl}">문서</a>
    </td>
    <td><a href="${quizRow.previewUrl}">보기</a></td>
    <td><a href="${quizRow.gitUrl}">git</a></td>
  </tr>`
}

function createClassRow(classRow) {
    return `
    <tr>
    <th scope="row">${classRow.week}</th>
    <td>${classRow.title}</td>
    <td>
    <a href="${classRow.docUrl}" class="badge bg-secondary">문서</a>
    </td>
    <td>${classRow.links.map((link, i) => { 
      return `<a href="${link}" class="badge bg-secondary">${i+1}</a>`
    }).join("")}</td>
    <td>${classRow.date}</td>
    <td>
      <a href="${classRow.gitUrl}">git</a>
    </td>
    </tr>
    `
    }

function createClassTable(data) {
  return createTable(data,createClassRow);
}

function createQuizTable(data) {
  return createTable(data,createQuizRow);
}

export { createClassTable, createQuizTable }