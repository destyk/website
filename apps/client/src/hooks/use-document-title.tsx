import { useRef, useEffect } from 'react';

const useDocumentTitle = (title: string, postfix = '// destyk.', prevailOnUnmount = false) => {
    const defaultTitle = useRef(document.title);
    const builtTitle = postfix == null || postfix == '' ? title : `${title} ${postfix}`;

    useEffect(() => {
        document.title = builtTitle;
    }, [title]);

    useEffect(
        () => () => {
            if (!prevailOnUnmount) {
                document.title = defaultTitle.current;
            }
        },
        []
    );
};

export { useDocumentTitle };
