const posts = document.querySelectorAll(".post");
    const postsPerPage = 5;
    let currentPage = 1;
    const totalPages = Math.ceil(posts.length / postsPerPage);

    function showPage(page) {
      posts.forEach((post, index) => {
        const start = (page - 1) * postsPerPage;
        const end = page * postsPerPage;
        post.style.display = (index >= start && index < end) ? "block" : "none";
      });
      renderPagination();
    }

    function renderPagination() {
      const pagination = document.getElementById("pagination");
      pagination.innerHTML = "";

      const prev = document.createElement("span");
      prev.textContent = "<";
      prev.className = "page-btn";
      prev.onclick = () => {
        if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
        }
      };
      pagination.appendChild(prev);

      for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("span");
        btn.textContent = i;
        btn.className = "page-btn";
        if (i === currentPage) btn.style.fontWeight = "bold";
        btn.onclick = () => {
          currentPage = i;
          showPage(i);
        };
        pagination.appendChild(btn);
      }

      const next = document.createElement("span");
      next.textContent = ">";
      next.className = "page-btn";
      next.onclick = () => {
        if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
        }
      };
      pagination.appendChild(next);
    }

    document.querySelectorAll(".toggle-btn").forEach(btn => {
      btn.onclick = function () {
        const post = this.closest(".post");
        const details = post.querySelector(".details");
        const isOpen = details.classList.contains("open");
      
        if (isOpen) {
          details.style.maxHeight = "0";
          this.textContent = "+";
        } else {
          details.style.maxHeight = details.scrollHeight + "px";
          this.textContent = "−";
        }
      
        details.classList.toggle("open");
      };
    });

    showPage(currentPage);
  