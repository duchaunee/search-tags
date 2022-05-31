
const listItem = document.querySelector('.list__item');
const input = document.querySelector('input');

let tags = ["duchau", "quynhmai"]; //dùng mảng để check không thêm các phần tử trung
// bằng cách dùng tags.includes(item)
remove();

function createTag(text) {

    let li = document.createElement('li');
    li.setAttribute("class", "search__tag--item"); 

    li.innerHTML = `
                ${text}
                <i class="search__tag-icon fas fa-times"></i>
    `
    listItem.appendChild(li);
    remove();
}

function addTag() {
    input.addEventListener("keyup", (e) => {
        let valueInput = e.target.value.trim();
        if( e.code == 'Enter') {
            if ( valueInput != "" && !tags.includes(valueInput)) {
                createTag(valueInput);
                tags.push(valueInput);
                e.target.value = "";
            }
            else e.target.value = "";
        }
    });
}

function removeAll() {
    let removeAll = document.querySelectorAll('li');
    removeAll.forEach( (item) => {
        item.remove();
        tags.splice(0,tags.length); //xóa mảng
    })
}

function remove() {
    let removeAll = document.querySelectorAll('li');
    removeAll.forEach( (item, idx) => {
        item.querySelector('.search__tag-icon').onclick = () => {
            item.remove();
            tags.splice(idx, 1); //Xóa phần tử đó của mảng
        }
    })
}

document.querySelector('.remove__all').addEventListener("click", removeAll);


addTag();
