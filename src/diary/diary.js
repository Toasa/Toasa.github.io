window.onload = function () {
    var pTag = document.getElementById('latest_diary')
    var aTag = document.createElement('a')
    aTag.href = getLatestDiaryURL()
    aTag.text = '最新'
    pTag.appendChild(aTag)
}

function getLatestDiaryURL() {
    var now = new Date()
    var Y = now.getFullYear()
    var M = (now.getMonth() + 1).toString().padStart(2, '0')
    var D = now.getDate().toString().padStart(2, '0')

    return `https://github.com/toasa/toasa.github.io/blob/main/diary/${Y}/${M}/${D}.md`
}