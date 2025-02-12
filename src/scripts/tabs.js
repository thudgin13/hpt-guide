if(document.location.pathname === '/theory/') {
    const rows = document.querySelectorAll('tbody tr')
    rows.forEach(row => {
        row.addEventListener('click', (e) => {
            const cells = Array.from(row.children);
            cells.forEach((cell) => {
                if(cell?.dataset.name === 'more') {
                    const slug = cell?.textContent || ''
                    console.log("TEXT", slug)
                    window.location = `${decodeURIComponent(slug)}`
                }
            }) 
        })
    })
}