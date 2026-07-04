const Pagination = ({ page, totalPages, setPage }) => {

    if (totalPages <= 1) return null;

    const pages = [];

    if (totalPages <= 5) {

        for (let i = 1; i <= totalPages; i++) {
            pages.push(i);
        }

    } else {

        if (page <= 3) {

            pages.push(1, 2, 3, "...", totalPages);

        }

        else if (page >= totalPages - 2) {

            pages.push(
                1,
                "...",
                totalPages - 2,
                totalPages - 1,
                totalPages
            );

        }

        else {

            pages.push(
                1,
                "...",
                page - 1,
                page,
                page + 1,
                "...",
                totalPages
            );

        }

    }

    return (

        <div className="pagination">

            <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
            >
                ← Previous
            </button>

            {pages.map((item, index) =>

                item === "..." ? (

                    <span
                        key={index}
                        className="dots"
                    >
                        ...
                    </span>

                ) : (

                    <button
                        key={index}
                        className={page === item ? "active" : ""}
                        onClick={() => setPage(item)}
                    >
                        {item}
                    </button>

                )

            )}

            <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
            >
                Next →
            </button>

        </div>

    );

};

export default Pagination;