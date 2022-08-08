package singletonpattern;

/**
 * LazyHolderSingleton
 * @see <a href="https://stackoverflow.com/questions/15019306/regarding-static-holder-singleton-pattern">Reference</a>
 */
public class LazyHolderSingleton {
    private class InstanceHolder {
        private static LazyHolderSingleton instancia = new LazyHolderSingleton();;
    }

    private LazyHolderSingleton() {
        super();
    }

    public static LazyHolderSingleton getInstancia() {
        return InstanceHolder.instancia;
    }
}
