const printMessage = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Slow Message');
            resolve();  
        }, 2000);
    });
}

printMessage()