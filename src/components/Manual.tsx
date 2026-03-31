import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const sections = [
  {
    id: 'rpn',
    icon: '∑',
    color: '#00d4aa',
    title: 'RPN Stack Calculator',
    content: [
      {
        heading: 'What is RPN?',
        body: 'Reverse Polish Notation (RPN) eliminates parentheses by placing operators after operands. Instead of typing "3 + 4", you type "3 ENTER 4 +" — the stack handles grouping automatically.',
      },
      {
        heading: 'The 4-Level Stack',
        body: 'The display shows 4 registers: X (bottom, active), Y, Z, T. When you press ENTER, X is pushed up and duplicated. Most operations consume X and Y and push the result back to X.',
      },
      {
        heading: 'Basic Operations',
        body: 'Enter the first number → ENTER → enter the second number → press operator (+, −, ×, ÷). Example: to compute 15 ÷ 3, press: 1 5 ENTER 3 ÷ → result 5 appears in X.',
      },
      {
        heading: 'Key: ENTER',
        body: 'Pushes the current X value onto the stack and lifts the stack. Press ENTER after the first operand to "hold" it while typing the second.',
      },
      {
        heading: 'Key: +/−',
        body: 'Changes the sign of the X register. Useful for entering negative numbers without needing a separate minus key.',
      },
      {
        heading: 'Math Functions',
        body: 'SIN, COS, TAN, LOG, √, x², 10^x all operate directly on X. To compute sin(45°): enter 4 5 SIN. The result replaces X.',
      },
      {
        heading: 'Key: BACK / AC',
        body: 'BACK returns to the previous mode. AC clears X and resets the current mode state — useful to start a fresh calculation.',
      },
    ],
  },
  {
    id: 'cas',
    icon: '∫',
    color: '#ffb800',
    title: 'CAS — Computer Algebra',
    content: [
      {
        heading: 'Symbolic vs Numeric',
        body: 'CAS mode works symbolically: expressions like "x^2 - 4" are kept as formulas, not evaluated. You can solve for variables, factor, and simplify without losing precision.',
      },
      {
        heading: 'Entering Expressions',
        body: 'Use the keyboard to type expressions. Supported: variables (x, y, z), powers (^), trigonometric functions (sin, cos, tan), logarithms (log, ln), and grouping with parentheses.',
      },
      {
        heading: 'Cursor Navigation',
        body: 'The blinking cursor shows the insertion point. Use LEFT / RIGHT arrows to move within the expression. Functions like SIN insert "sin()" and place the cursor inside the parentheses automatically.',
      },
      {
        heading: 'Solving Equations',
        body: 'Type an equation with "=" (e.g., x^2 = 9) and press F1 (SOLVE). The CAS returns all solutions, including complex roots when applicable.',
      },
      {
        heading: 'Simplification',
        body: 'Press F2 (SIMPLIFY) to reduce an expression to its simplest form. "sin(x)^2 + cos(x)^2" simplifies to "1" automatically.',
      },
      {
        heading: 'Precision Engine',
        body: 'Backed by GMP and MPFR libraries for arbitrary-precision arithmetic. Rational numbers stay exact: 1/3 is never rounded to a decimal unless you request numeric evaluation.',
      },
    ],
  },
  {
    id: 'matrices',
    icon: '⊞',
    color: '#58a6ff',
    title: 'Matrix Operations',
    content: [
      {
        heading: 'Entering a Matrix',
        body: 'Select EDIT A or EDIT B from the matrix menu. Use the arrow keys to navigate cells, type the value and press ENTER to confirm each cell. Rows and columns (1–4) are adjustable.',
      },
      {
        heading: 'Selected Cell Highlight',
        body: 'The active cell is shown in inverse video (white text on black). You always know where you are in the grid.',
      },
      {
        heading: 'Available Operations',
        body: 'From OPS menu: A+B (add), A−B (subtract), A×B (multiply), det(A) (determinant), A^T (transpose), A^−1 (inverse). Results are shown in the RESULT view.',
      },
      {
        heading: 'Determinant',
        body: 'Works on square matrices (2×2, 3×3, 4×4). Result is a scalar displayed in the standard result area with "=" prefix.',
      },
      {
        heading: 'Inverse Matrix',
        body: 'A^−1 is computed if the determinant is non-zero. If the matrix is singular, an error message is displayed instead.',
      },
    ],
  },
  {
    id: 'conversion',
    icon: '⇄',
    color: '#ff4757',
    title: 'Unit Conversion',
    content: [
      {
        heading: 'Categories',
        body: 'Conversions are organised by physical dimension: Length, Mass, Temperature, Energy, Pressure, Speed, Volume, Area, Time, and Digital storage.',
      },
      {
        heading: 'How to Convert',
        body: 'Select a category → enter the value in the top field → select the source unit (F2) and target unit (F3) → press F1 (CONVERT). The result appears in the bottom field.',
      },
      {
        heading: 'Temperature Special Case',
        body: 'Temperature (°C, °F, K) uses affine conversion (not just scaling), handled correctly by the engine.',
      },
    ],
  },
  {
    id: 'equations',
    icon: '=',
    color: '#00d4aa',
    title: 'Equation Solver',
    content: [
      {
        heading: 'Linear Systems',
        body: 'Solve 2×2 or 3×3 systems of linear equations using Gaussian elimination. Enter coefficients in the matrix form — the right-hand side values go in the last column.',
      },
      {
        heading: 'Input Format',
        body: 'For a 2×2 system: row 1 = [a1 b1 | c1], row 2 = [a2 b2 | c2]. Navigate cells with arrow keys and confirm each with ENTER.',
      },
      {
        heading: 'Result',
        body: 'The solution vector [x, y] or [x, y, z] is shown clearly. If the system has no solution or infinitely many, the display indicates accordingly.',
      },
    ],
  },
  {
    id: 'complex',
    icon: 'i',
    color: '#ffb800',
    title: 'Complex Numbers',
    content: [
      {
        heading: 'Entering Complex Numbers',
        body: 'Enter the real part in field A and imaginary part in field B. The display shows the number as "a + bi" in real time.',
      },
      {
        heading: 'Arithmetic',
        body: 'Two complex numbers (A, B) can be added, subtracted, multiplied and divided. Select the operation with the F-keys.',
      },
      {
        heading: 'Polar Display',
        body: 'Press F3 (POLAR) to switch to magnitude-angle representation |z|∠θ. The angle is shown in degrees or radians according to the global angle mode.',
      },
      {
        heading: 'Conjugate & Modulus',
        body: 'F4 computes the complex conjugate (a − bi); F5 computes the modulus |z| = √(a²+b²) as a real scalar.',
      },
    ],
  },
  {
    id: 'vectors',
    icon: '→',
    color: '#58a6ff',
    title: 'Vector Calculator',
    content: [
      {
        heading: '2D and 3D Vectors',
        body: 'Enter vectors A and B component by component. The Z component can be left as 0 for 2D calculations.',
      },
      {
        heading: 'Dot Product',
        body: 'A · B = Ax·Bx + Ay·By + Az·Bz. Result is a scalar. Useful to check orthogonality (result = 0) or compute work in physics.',
      },
      {
        heading: 'Cross Product',
        body: 'A × B gives a new vector perpendicular to both A and B. Only defined for 3D vectors. Magnitude equals the area of the parallelogram spanned by A and B.',
      },
      {
        heading: 'Magnitude & Normalise',
        body: '|A| gives the Euclidean length. NORM divides each component by |A| to produce a unit vector.',
      },
    ],
  },
  {
    id: 'constants',
    icon: 'π',
    color: '#ff4757',
    title: 'Physical Constants',
    content: [
      {
        heading: 'Built-in Library',
        body: 'Access 20+ constants with a single tap. Categories: Mathematical (π, e, φ), Universal (c, G, h), Electromagnetic (e charge, ε₀, μ₀), Atomic (mₑ, mₚ, mₙ, Nₐ, kB, R).',
      },
      {
        heading: 'Using a Constant',
        body: 'Browse to the desired constant and press ENTER. The value is inserted into the active input field or pushed to the RPN stack — depending on the current mode.',
      },
      {
        heading: 'Precision',
        body: 'All constants are stored at full CODATA precision. No rounding errors from abbreviated values.',
      },
    ],
  },
]

export default function Manual() {
  const [open, setOpen] = useState<string | null>('rpn')
  const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="manual" className="py-24 border-t border-retro-border">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className="mb-12"
          style={{ opacity: inView ? 1 : 0, transform: inView ? 'none' : 'translateY(16px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        >
          <div className="retro-badge inline-block mb-4">// USER MANUAL</div>
          <h2 className="font-pixel text-lg sm:text-xl text-retro-text leading-relaxed">
            How to use<br />
            <span className="text-green lcd-glow">each mode</span>
          </h2>
          <p className="font-mono-retro text-retro-muted text-sm mt-4 max-w-xl">
            &gt; Select a section below to expand its instructions.
          </p>
        </div>

        <div className="space-y-2">
          {sections.map((s) => {
            const isOpen = open === s.id
            return (
              <div key={s.id} className="border border-retro-border" style={{ borderColor: isOpen ? s.color + '80' : undefined }}>
                {/* Header */}
                <button
                  className="w-full flex items-center gap-4 px-5 py-4 text-left hover:bg-retro-card transition-colors duration-150"
                  onClick={() => setOpen(isOpen ? null : s.id)}
                >
                  <span className="font-pixel text-xl w-8 text-center flex-shrink-0" style={{ color: s.color, textShadow: `0 0 10px ${s.color}` }}>
                    {s.icon}
                  </span>
                  <span className="font-pixel text-xs flex-1" style={{ color: '#d4e8f0' }}>{s.title}</span>
                  <span className="font-pixel text-retro-muted text-xs">{isOpen ? '▲' : '▼'}</span>
                </button>

                {/* Content */}
                {isOpen && (
                  <div className="px-5 pb-6 pt-2 border-t border-retro-border bg-retro-card">
                    <div className="pixel-divider mb-5"/>
                    <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                      {s.content.map((c) => (
                        <div key={c.heading}>
                          <div className="font-pixel text-xs mb-2" style={{ color: s.color }}>&gt; {c.heading}</div>
                          <p className="font-mono-retro text-retro-muted text-xs leading-relaxed">{c.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
