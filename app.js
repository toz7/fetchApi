function showOutput() {
    fetch("https://emojihub.herokuapp.com/api/all")
        .then((res) => {
        res.json()
        .then(data => {
            console.log(data);
            if (data.length > 0) {
              let temp = "";
              data.forEach((itemData) => {
                temp += "<tr>";
                temp += "<td>" + itemData.htmlCode + "</td>";
                temp += "<td>" + itemData.name + "</td>";
                temp += "<td>" + itemData.group + "</td></tr>";
              });
              document.getElementById('data').innerHTML = temp;
            }
          }
        )
      })
    }
      document.getElementById('get').addEventListener('click', showOutput)