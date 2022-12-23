let url = new URL(location.href);
let id = url.searchParams.get("id");

fetch ('https://jsonplaceholder.typicode.com/users/' + id)
    .then (user => user.json())
    .then (users => {
        for (const item1 in users) {

            const div1 = document.createElement('div');
            if (typeof users[item1] !== 'object') {

                div1.innerHTML = `<b>${item1} : </b>  ${users[item1]}` ;
            } else {
                div1.innerHTML = `<b>${item1} :</b>`;

                for (const item2 in users[item1]) {
                    const div2 = document.createElement('div');
                    if(typeof users[item1][item2] !== 'object') {
                        div2.innerHTML = `<b>${item2}</b> : ${users[item1][item2]}`;

                    } else {
                        div2.innerHTML = `<b>${item2} :</b>`;

                        for (const item3 in users[item1][item2]) {
                            const div3 = document.createElement('div');
                            if(typeof users[item1][item2][item3] !== 'object') {
                                div3.innerHTML = `<b>${item3} :</b> ${users[item1][item2][item3]}` ;
                            }
                            div2.appendChild(div3);
                        }
                    }
                    div1.append(div2);
                }
            }
            document.body.append(div1);
            const container = document.getElementsByClassName('container');
            container[0].append(div1);

        }
        let btn = document.querySelector('.postBtn');
        btn.onclick = function () {
            fetch ('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
                .then(value => value.json())
                .then(value => {
                    let div = document.createElement('div');
                    div.classList.add('titleDiv');

                    for (const item of value) {
                        let div2 = document.createElement('div');
                        div2.classList.add('innerTitleDiv')

                        let a = document.createElement('a');
                        a.innerText = 'read';
                        a.href = `posts.html?post=${item.id}`;
                        a.classList.add('readLnk')

                        let innerBtn = document.createElement('button');
                        let innerBtnDiv = document.createElement('div');
                        innerBtn.appendChild(a);
                        innerBtnDiv.appendChild(innerBtn);
                        div2.innerHTML = ` <b>${item.id}</b> ${item.title}`;
                        innerBtn.classList.add('readBtn');

                        div2.appendChild(innerBtnDiv);
                        div.appendChild(div2);
                        document.body.appendChild(div);
                    }

                })
        }

    });