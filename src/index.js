exports.render = (colors) => {
  const c = 'dark' in colors ? colors.dark : colors.light;
  const unindent = (s) => s
    .split('\n')
    .filter(x => x !== '')
    .map(x => x.trim())
    .reduce((x, y) => x + '\n' + y);
  const theme = unindent(`
	set $accent0 ${c.accent0}
	set $accent1 ${c.accent1}
	set $accent2 ${c.accent2}
	set $accent3 ${c.accent3}
	set $accent4 ${c.accent4}
	set $accent5 ${c.accent5}
	set $accent6 ${c.accent6}
	set $accent7 ${c.accent7}
	set $shade0 ${c.shade0}
	set $shade1 ${c.shade1}
	set $shade2 ${c.shade2}
	set $shade3 ${c.shade3}
	set $shade4 ${c.shade4}
	set $shade5 ${c.shade5}
	set $shade6 ${c.shade6}
	set $shade7 ${c.shade7}
  `);

  return [
	Promise.resolve({
	  name: 'i3-colors.conf',
	  contents: Buffer.from(theme, 'utf8')
	})
  ];
};
