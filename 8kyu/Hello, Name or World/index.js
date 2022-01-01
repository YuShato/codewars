function hello(name) {
    return name ? 
    `Hello, ${name[0].toUpperCase() + name.slice(1, name.length).toLowerCase()}!` : 
    'Hello, World!';
}