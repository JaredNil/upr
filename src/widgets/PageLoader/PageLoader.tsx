import { classNames } from 'shared/lib/classNames/classNames'

interface PageLoaderProps {
    className?: string
    // theme?: ;
}

const PageLoader: React.FC<PageLoaderProps> = ({ className }: PageLoaderProps) => {
    return (
        <div
            className={classNames('page__loader', {}, [className])}
        >
            <div className="lds-hourglass"></div>
        </div>
    )
}

export default PageLoader
