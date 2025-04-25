document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const documentItems = document.querySelectorAll('.document-item');
    const searchInput = document.getElementById('document-search-input');
    const searchButton = document.getElementById('document-search-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            documentItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else {
                    if (item.getAttribute('data-category') === filter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
        });
    });
    searchButton.addEventListener('click', searchDocuments);
    searchInput.addEventListener('keyup', function(event) {
        if (event.key === 'Enter') {
            searchDocuments();
        }
    });

    function searchDocuments() {
        const searchTerm = searchInput.value.toLowerCase().trim();
        
        if (searchTerm === '') {
            const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
            
            documentItems.forEach(item => {
                if (activeFilter === 'all') {
                    item.style.display = 'flex';
                } else {
                    if (item.getAttribute('data-category') === activeFilter) {
                        item.style.display = 'flex';
                    } else {
                        item.style.display = 'none';
                    }
                }
            });
            
            return;
        }
        
        documentItems.forEach(item => {
            const title = item.querySelector('.document-title').textContent.toLowerCase();
            const desc = item.querySelector('.document-desc').textContent.toLowerCase();
            
            if (title.includes(searchTerm) || desc.includes(searchTerm)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
        
        filterButtons.forEach(btn => btn.classList.remove('active'));
        document.querySelector('[data-filter="all"]').classList.add('active');
    }

    const paginationButtons = document.querySelectorAll('.pagination-btn');
    
    paginationButtons.forEach(button => {
        button.addEventListener('click', () => {
            paginationButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        
            console.log(`Page ${button.textContent} clicked`);
        });
    });


    const downloadButtons = document.querySelectorAll('.document-download-btn');
    const viewButtons = document.querySelectorAll('.document-view-btn');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const documentTitle = this.closest('.document-item').querySelector('.document-title').textContent;
            alert(`Đang tải xuống: ${documentTitle}`);
        });
    });
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const documentTitle = this.closest('.document-item').querySelector('.document-title').textContent;
            alert(`Đang mở xem trước: ${documentTitle}`);
        });
    });
});
