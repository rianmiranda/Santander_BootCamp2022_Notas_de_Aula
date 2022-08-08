package singletonpattern;

public class Test {
    public static void main(String[] args) {
        LazySingleton lazy = LazySingleton.getInstancia();
        System.out.println(lazy);

        lazy = LazySingleton.getInstancia();
        System.out.println(lazy);

        EagerSingleton eager = EagerSingleton.getInstancia();
        System.out.println(eager);

        eager = EagerSingleton.getInstancia();
        System.out.println(eager);

        LazyHolderSingleton lazyHolder = LazyHolderSingleton.getInstancia();
        System.out.println(lazyHolder);

        lazyHolder = LazyHolderSingleton.getInstancia();
        System.out.println(lazyHolder);
    }
}
