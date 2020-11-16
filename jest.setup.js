jest.mock('next/router', () => ({
    useRouter() {
        return {
            pathname: '/edit/$id',
            route   : '/edit/$id',
            query   : { id: 1 },
            asPath  : '/edit/1',
        };
    },
}));