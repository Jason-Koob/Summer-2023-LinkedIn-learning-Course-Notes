class book {
    constructor(
        title,
        author,
        pageTotal,
        pageCurrent,
        ISBN,
        completeStatus
    ) {
        this.title = title,
        this.author = author,
        this.pageTotal = pageTotal,
        this.pageCurrent = pageCurrent,
        this.ISBN = ISBN,
        this.completeStatus = completeStatus;
    }
    updatePageCurrent (pageCurrent) {
        this.pageCurrent = pageCurrent;
        console.log("The new current page is:", pageCurrent)
    }
    updateCompleteStatus (completeStatus) {
        this.completeStatus = completeStatus;
        console.log("The new completion status is:", completeStatus)
    }
}

export default book;