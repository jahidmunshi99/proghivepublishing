const SectionBg = ({ children }) => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Floating Shapes */}
      <div className="pointer-events-none absolute inset-0">
        {/* Top Right */}
        <div
          className="absolute -top-48 -right-48 w-[520px] h-[520px]
                          bg-gradient-to-br from-green-300 to-transparent
                          rounded-[70px] rotate-12
                          opacity-60 blur-2xl
                          animate-float-slow"
        />

        {/* Bottom Left */}
        <div
          className="absolute -bottom-48 -left-48 w-[520px] h-[520px]
                          bg-gradient-to-tr from-green-300 to-transparent
                          rounded-[70px] -rotate-12
                          opacity-60 blur-2xl
                          animate-float-slow-reverse"
        />

        {/* Extra soft center shape (optional depth) */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2
                          w-[380px] h-[380px]
                          bg-gradient-to-br from-green-50 to-transparent
                          rounded-full opacity-40 blur-3xl
                          animate-float-fast"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default SectionBg;
