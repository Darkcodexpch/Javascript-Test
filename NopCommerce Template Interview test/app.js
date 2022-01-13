let showstock = document.getElementById('showstock');

fetch("./productlist.json")
  .then(response => response.json())
  .then((data) => {
    // console.log(data.products.map((id,key)=>{return id.id}))
    data.products.map((data, key) => {
      console.log(data.instock)
      let date = new Date(data.dateModified);
      let months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'July', 'Aug', "Sep", "Oct", "Nov", "Dec"]
      let m = date.getMonth();
      let y = date.getFullYear();
      let d = date.getDate();
      let c = date.getHours()
      let k = date.getMinutes()
      var ampm = date >= 12 ? 'pm' : 'am';
      if (showstock.checked  && data.instock === true) {
        return document.querySelector("#app").insertAdjacentHTML("afterbegin", `
        <tr>
        <td>${data.name}</td>
        <td>${data.category}</td>
        <td>${data.instock}</td>
        <td>${`${data.tags[0]},${data.tags[1]}`}</td>
        <td>${`${months[m]} ${d} ${y} ${c}:${k} ${ampm}`}</td>
      </tr>
      `)

      }
      else {
        return document.querySelector("#app").insertAdjacentHTML("afterbegin", `
          <tr>
          <td>${data.name}</td>
          <td>${data.category}</td>
          <td>${data.instock}</td>
          <td>${`${data.tags[0]},${data.tags[1]}`}</td>
          <td>${`${months[m]} ${d} ${y} ${c}:${k} ${ampm}`}</td>
        </tr>
        `)
      }

    })


  })