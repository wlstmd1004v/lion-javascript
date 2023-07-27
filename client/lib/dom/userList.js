import { insertLast } from "./insert.js";


function createUserCard({
    id = '',
    name = 'tiger',
    email = 'tiger@gmail.com',
    website = 'tiger.com'
}){

const template = `
        <article class="user-card" data-index="user-${id}">
        <h3 class="user-name">${name}</h3>
        <div class="user-resouce-info">
            <div>
            <a class="user-email" href="mailto:${email}">${email}</a>
            </div>
            <div>
            <a class="user-website" href="http://${website}" target="_blank" rel="noopener noreferer">${website}</a>
            </div>
        </div>
        <button class="delete">삭제</button>
        </article>
    `

    return template;
}


function createSpinner(size = 100,loadingMessage = '유저 정보를 가져오는 중...📂') {
    return  /*html*/` 
        <figure class="loadingSpinner">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <defs>
                        <path id="path" d="M50 15A15 35 0 0 1 50 85A15 35 0 0 1 50 15" fill="none"></path>
                        <path id="patha" d="M0 0A15 35 0 0 1 0 70A15 35 0 0 1 0 0" fill="none"></path>
                    </defs><g transform="rotate(0 50 50)">
                    <use xlink:href="#path" stroke="#f1f2f3" stroke-width="3"></use>
                    </g><g transform="rotate(60 50 50)">
                    <use xlink:href="#path" stroke="#f1f2f3" stroke-width="3"></use>
                    </g><g transform="rotate(120 50 50)">
                    <use xlink:href="#path" stroke="#f1f2f3" stroke-width="3"></use>
                    </g><g transform="rotate(0 50 50)">
                    <circle cx="50" cy="15" r="9" fill="#e15b64">
                        <animateMotion dur="1s" repeatCount="indefinite" begin="0s">
                        <mpath xlink:href="#patha"></mpath>
                        </animateMotion>
                    </circle>
                    </g><g transform="rotate(60 50 50)">
                    <circle cx="50" cy="15" r="9" fill="#f8b26a">
                        <animateMotion dur="1s" repeatCount="indefinite" begin="-0.16666666666666666s">
                        <mpath xlink:href="#patha"></mpath>
                        </animateMotion>
                    </circle>
                    </g><g transform="rotate(120 50 50)">
                    <circle cx="50" cy="15" r="9" fill="#abbd81">
                        <animateMotion dur="1s" repeatCount="indefinite" begin="-0.3333333333333333s">
                        <mpath xlink:href="#patha"></mpath>
                        </animateMotion>
                    </circle>
                    </g>
                    </svg>
                    <figcaption>${loadingMessage}</figcaption>
            </figure>`
}

function createEmptyCard(size=200,errorMessage='알 수 없는 정보입니다.☠️') {
    return /*html*/`
    <figure class="empty-user-card">
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin:auto;background:#fff;display:block;" width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
<g transform="translate(50 50)">
    <g transform="scale(0.8)">
    <g transform="translate(-50 -50)">
        <g>
        <animateTransform attributeName="transform" type="translate" repeatCount="indefinite" dur="1s" values="-20 -20;20 -20;0 20;-20 -20" keyTimes="0;0.33;0.66;1"></animateTransform>
        <path fill="#46dff0" d="M44.19 26.158c-4.817 0-9.345 1.876-12.751 5.282c-3.406 3.406-5.282 7.934-5.282 12.751 c0 4.817 1.876 9.345 5.282 12.751c3.406 3.406 7.934 5.282 12.751 5.282s9.345-1.876 12.751-5.282 c3.406-3.406 5.282-7.934 5.282-12.751c0-4.817-1.876-9.345-5.282-12.751C53.536 28.033 49.007 26.158 44.19 26.158z"></path>
        <path fill="#e90c59" d="M78.712 72.492L67.593 61.373l-3.475-3.475c1.621-2.352 2.779-4.926 3.475-7.596c1.044-4.008 1.044-8.23 0-12.238 c-1.048-4.022-3.146-7.827-6.297-10.979C56.572 22.362 50.381 20 44.19 20C38 20 31.809 22.362 27.085 27.085 c-9.447 9.447-9.447 24.763 0 34.21C31.809 66.019 38 68.381 44.19 68.381c4.798 0 9.593-1.425 13.708-4.262l9.695 9.695 l4.899 4.899C73.351 79.571 74.476 80 75.602 80s2.251-0.429 3.11-1.288C80.429 76.994 80.429 74.209 78.712 72.492z M56.942 56.942 c-3.406 3.406-7.934 5.282-12.751 5.282s-9.345-1.876-12.751-5.282c-3.406-3.406-5.282-7.934-5.282-12.751 c0-4.817 1.876-9.345 5.282-12.751c3.406-3.406 7.934-5.282 12.751-5.282c4.817 0 9.345 1.876 12.751 5.282 c3.406 3.406 5.282 7.934 5.282 12.751C62.223 49.007 60.347 53.536 56.942 56.942z"></path>
        </g>
    </g>
    </g>
    </g>
    </svg>
    <figucation>${errorMessage}</figucation>
    </figure>
    `
    
}

export function renderUserCard(target,data){
    insertLast(target,createUserCard(data))
}

export function renderSpinner(target){
    insertLast(target,createSpinner())
}

export function renderEmpty(target){
    insertLast(target,createEmptyCard())
}