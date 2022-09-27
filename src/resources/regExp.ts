const regExp = (txt: string) => {
    return txt
        .normalize('NFD')
        .replaceAll(/[\u0300-\u036f]/g, '')
        .replaceAll(' ', '-')
        .replaceAll(/[._/()]/g, '-')
        .replaceAll('--', '-')
        .replace(/\-$/, '')
        .toLocaleLowerCase()
}

export default regExp
