export const cls = (...classes: (string | undefined | boolean)[]): string => {
    return classes.filter((c) => !!c).join(' ');
};
