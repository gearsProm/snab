
  function switchLanguage(lang) {
    const pathParts = window.location.pathname.split('/');
    const currentLang = pathParts[1];
    const restOfPath = pathParts.slice(2).join('/');

    const targetPath = `/${lang}/${restOfPath || ''}`;
    const fallbackPath = `/${lang}/`;

    // Перевіряємо, чи існує сторінка
    fetch(targetPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          window.location.href = targetPath;
        } else {
          window.location.href = fallbackPath;
        }
      })
      .catch(() => {
        window.location.href = fallbackPath;
      });
  }
