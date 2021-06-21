function drawClassRow(data) {
    let row =  `
    <tr>
    <th scope="row">3</th>
    <td>${data.title}</td>
    <td>
    <a href="${data.docUrl}" class="badge bg-secondary">문서</a>
    </td>
    `;
    row +=`<td>`;
    for (let i = 0; i < data.links.length; i++) {
       row += `<a href="${data.links[i]}" class="badge bg-secondary">${i+1}</a>` 
    }
    row += `</td>`;
    row += `
    <td>${data.date}</td>
    <td>
      <a href="${data.gitUrl}">git</a>
    </td>
    </tr>
    `
    return row;
    }

export {drawClassRow}