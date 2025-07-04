function formatWithPrefix(value, unit) {
    const prefixes = [
        { factor: 1e12, symbol: 'T' },   // Tera
        { factor: 1e9,  symbol: 'G' },   // Giga
        { factor: 1e6,  symbol: 'M' },   // Mega
        { factor: 1e3,  symbol: 'k' },   // Kilo
        { factor: 1,    symbol: ''  },   // Einheit
        { factor: 1e-3, symbol: 'm' },   // Milli
        { factor: 1e-6, symbol: 'µ' },   // Mikro
        { factor: 1e-9, symbol: 'n' },   // Nano
        { factor: 1e-12, symbol: 'p' }   // Pico
    ];

    const absValue = Math.abs(value);
    let prefix = prefixes.find(p => absValue >= p.factor) || prefixes[prefixes.length - 1];

    let scaledValue = value / prefix.factor;

    // Auf maximal 3 signifikante Stellen runden
    if (Math.abs(scaledValue) < 1) {
        scaledValue = scaledValue.toPrecision(2);
    } else if (Math.abs(scaledValue) < 10) {
        scaledValue = scaledValue.toPrecision(3);
    } else {
        scaledValue = scaledValue.toPrecision(4);
    }

    return `${scaledValue} ${prefix.symbol}${unit}`;
}
