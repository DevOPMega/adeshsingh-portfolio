export default function Video() {
    return (
        <div className="fixed top-2/3 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 blur-sm rounded-full overflow-hidden">
            <video width="480" height="360" muted autoPlay loop>
                <source src="/vid/crystal.mp4" type="video/mp4" />
            </video>
        </div>

    )
}