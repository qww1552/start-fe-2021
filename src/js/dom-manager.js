
function createClassTable(data) {
  const table = data.map((classRow,index)=>{
    return createClassRow(classRow);
  });
  return table.join("");
}

function createQuizTable(data) {
  const table = data.map((quizRow,index)=>{
    return createQuizRow(quizRow);
  });
  return table.join("");
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
    let row =  `
    <tr>
    <th scope="row">${classRow.week}</th>
    <td>${classRow.title}</td>
    <td>
    <a href="${classRow.docUrl}" class="badge bg-secondary">문서</a>
    </td>
    `;
    row +=`<td>`;
    for (let i = 0; i < classRow.links.length; i++) {
       row += `<a href="${classRow.links[i]}" class="badge bg-secondary">${i+1}</a>` 
    }
    row += `</td>`;
    row += `
    <td>${classRow.date}</td>
    <td>
      <a href="${classRow.gitUrl}">git</a>
    </td>
    </tr>
    `
    return row;
    }

export { createClassTable, createQuizTable }