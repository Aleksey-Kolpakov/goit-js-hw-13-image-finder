const formDataCollect = function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submitData = {};
    formData.forEach((value, key) => {
        submitData[key] = value;
    });
    return submitData;
}

export default formDataCollect;